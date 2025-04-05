'use client'
import React from 'react'

export function DeleteButton({ id, deleteUser }: { id: string; deleteUser: (id: string) => Promise<void> }) {
  return <button onClick={() => deleteUser(id)}>Delete</button>
}
