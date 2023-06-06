import './globals.css'
import { Inter } from 'next/font/google'
import ReactQueryProvider from '../util/ReactQueryProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Plant gallery',
  description: 'Show your plant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
