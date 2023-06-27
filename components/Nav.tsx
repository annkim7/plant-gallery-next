'use client'

import Link from 'next/link'
import Logo from './Logo'
import Login from './Login'
import Logout from './Logout'
import { useSession } from 'next-auth/react'

export default function Nav() {
  const { data: session } = useSession()

  return (
    <header className="border-b border-slate-200 dark:border-neutral-600">
      <nav className="max-w-5xl flex px-3.5 py-3.5 mx-auto justify-between">
        <h2>
          <Link href="/" className="logo">
            <Logo />
          </Link>
        </h2>
        <ul className="flex shrink-0 gap-4">
          {['write'].map((el) => (
            <li key={el}>
              <Link
                href={`/${el}`}
                className="text-sm text-slate-700 font-normal font-caveat"
              >
                {el.replace(/^[a-z]/, (char) => char.toUpperCase())}
              </Link>
            </li>
          ))}
        </ul>
        {session && <span> {session?.user?.name} 님 환영합니다</span>}

        <div className="flex gap-2">
          {session ? (
            <>
              <Logout />
              <Link href="/mypage">페이지</Link>
            </>
          ) : (
            <>
              <Login />
              <Link href="/register">등록</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
