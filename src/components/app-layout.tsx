import React from 'react'
import Image from 'next/image'
import { ThemeSelect } from './theme-select'
import Link from 'next/link'

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between h-full">
      <header className="flex items-center justify-between p-2">
        <div className="flex gap-[8px] items-center">
          <Link href="/">
            <div className="flex gap-[8px] items-center">
              <Image src="/logo.png" alt="Logo" width={42.5} height={42.5} priority />
              <span className="font-bold text-lg">Samui</span>
            </div>
          </Link>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/users">Users</Link>
        </div>
        <ThemeSelect />
      </header>
      <main className="flex-1 h-full overflow-auto">{children}</main>
      <footer className="flex justify-center items-center p-1">samui-build</footer>
    </div>
  )
}
