'use client'

import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <button
      onClick={() => {
        signIn()
      }}
      className="font-caveat"
    >
      LogIn
    </button>
  )
}
