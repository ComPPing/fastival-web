import type { AppProps } from 'next/app'
import { Noto_Sans_KR } from 'next/font/google'
import { ThemeProvider } from '@emotion/react'

import { theme } from '@/styles/theme'
import '@/styles/globals.css'

const NotoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
      />
      <style jsx global>{`
        html {
          font-family: ${NotoSansKR.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
