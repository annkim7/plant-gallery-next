import { Roboto, Noto_Sans_KR, Caveat } from 'next/font/google'

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

const cls = (...classnames: string[]) => {
  return classnames.join(' ')
}

const fontStyle = cls(notoSansKr.className, roboto.variable, caveat.variable)

export default fontStyle
