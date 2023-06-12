import fontStyle from '@/app/font'
import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '../util/ReactQueryProvider'
import Nav from '../components/Nav'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plant gallery',
  description: 'Show your plant',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body
        className={(inter.className, fontStyle)}
        suppressHydrationWarning={true}
      >
        <Nav info={session} />
        <main className="max-w-5xl mx-auto !p-0">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  )
}
