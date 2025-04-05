import { DeleteButton } from '@/components/delete-button'
import { prisma } from '@/lib/prisma.server'
import { revalidatePath } from 'next/cache'
import React from 'react'

export const dynamic = 'force-dynamic'

export default async function Users() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  })

  async function createRandomUser() {
    'use server'
    const username = `user-${Math.random()}`
    const user = await prisma.user.create({ data: { username } })
    revalidatePath('/users') // Revalidate the current page
    console.log(user)
  }

  async function deleteUser(id: string) {
    'use server'
    await prisma.user.delete({ where: { id } })
    revalidatePath('/users') // Revalidate the current page
  }

  return (
    <div>
      <div>Users</div>
      <div>
        <button onClick={createRandomUser}>Create Random User</button>
        <div className="grid grid-cols-3 gap-[24px] p-2">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col gap-[8px]">
              <h2 className="text-2xl font-bold">{user.username}</h2>
              <pre className="text-sm">{JSON.stringify(user, null, 2)}</pre>
              <DeleteButton id={user.id} deleteUser={deleteUser} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
