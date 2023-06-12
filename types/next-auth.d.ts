import NextAuth, { Session, User } from 'next-auth/next'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    name: string
    email: string
  }

  interface User {
    name: string
    email: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: Record<string, {}>
    name: string
    email: string
  }
}
