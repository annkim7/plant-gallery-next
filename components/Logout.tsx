'use client'

import { signOut } from 'next-auth/react'

export default function Logout() {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_FETCH_URL })
      }}
    >
      로그아웃
    </button>
  )
}
