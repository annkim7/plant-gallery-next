'use client'

import Link from 'next/link'
import Logo from './Logo'
import Login from './Login'
import Logout from './Logout'
import { useSession } from 'next-auth/react'
import Img from '@/components/Img'

export default function Nav() {
  const { data: session } = useSession()

  return (
    <header className="border-b shadow-[0px_3px_8px_0px_#00000024] dark:border-neutral-600">
      <nav className="max-w-5xl flex px-3.5 py-3.5 mx-auto justify-between items-center">
        <h2>
          <Link href="/" className="logo">
            <Logo />
          </Link>
        </h2>

        <div className="flex gap-2">
          {session ? (
            <>
              <Logout />
              <Link href="/mypage" className="overflow-hidden rounded-full">
                <Img
                  width="6"
                  height="6"
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
              </Link>
            </>
          ) : (
            <>
              <Login />
              <Link href="/register" className="font-caveat">
                Regi
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
