import { connectDB } from '@/util/database'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth, { Awaitable, NextAuthOptions, Session, User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import KakaoProvider from 'next-auth/providers/kakao'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const authOptions: NextAuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(
        credentials: Record<'email' | 'password', string> | undefined,
      ): Promise<User | null> {
        if (credentials === undefined) {
          return null
        }
        let db = (await connectDB).db('plant')

        let user = await db
          .collection('user_cred')
          .findOne<User>({ email: credentials.email })
        if (!user) {
          console.log('존재하지 않는 이메일입니다')
          return null
        }

        const pwcheck = await bcrypt.compare(
          credentials.password,
          user.password,
        )
        if (!pwcheck) {
          console.log('비밀번호가 다릅니다')
          return null
        }
        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user: User }): Promise<JWT> => {
      if (user) {
        token.user = {}
        token.user.name = user.name
        token.user.email = user.email
        token.user.image = user.image
      }
      return token
    },
    session: async ({
      session,
      token,
    }: {
      session: Session
      token: JWT
    }): Promise<Session> => {
      session.user = token.user
      return session
    },
  },
  secret: process.env.JWT_SECRET,
  adapter: MongoDBAdapter(connectDB),
}

export default NextAuth(authOptions)
