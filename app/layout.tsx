import fontStyle from '@/app/font'
import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '../util/ReactQueryProvider'
import Nav from '../components/Nav'
import { Roboto, Noto_Sans_KR, Caveat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plant gallery',
  description: 'Show your plant',
}

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['100', '400', '700', '900'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--roboto',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--caveat',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={(inter.className, fontStyle)}
        suppressHydrationWarning={true}
      >
        <Nav />
        <main className="max-w-5xl mx-auto !p-0">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  )
}
