import Link from 'next/link'
import Logo from './Logo'
import Login from './Login'
import Logout from './Logout'
import { Session } from 'next-auth'

interface UserProps {
  info: Session | null
}

export default function Nav({ info }: UserProps) {
  return (
    <header className="border-b border-slate-200">
      <nav className="max-w-5xl flex px-3.5 py-3.5 mx-auto justify-between">
        <h2>
          <Link href="/" className="logo">
            <Logo />
          </Link>
        </h2>
        <ul className="flex shrink-0 gap-4">
          {['list', 'write', 'mypage', 'register'].map((el) => (
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
        {info && <span> {info?.user?.name} 님 환영합니다</span>}
        {info ? <Logout /> : <Login />}
      </nav>
    </header>
  )
}
