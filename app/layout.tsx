import fontStyle from '@/app/font'
import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '../util/ReactQueryProvider'
import Nav from '@/components/Nav'
import Recoil from '@/util/Recoil'
import Session from '@/util/Session'

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
  return (
    <html
      lang="en"
      className="text-base sm:text-sm md:text-lg lg:text-lg xl:text-xl"
    >
      <body
        className={(inter.className, fontStyle)}
        suppressHydrationWarning={true}
      >
        <ReactQueryProvider>
          <Session>
            <Recoil>
              <Nav />
              <main className="max-w-5xl mx-auto !p-0">{children}</main>
            </Recoil>
          </Session>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
