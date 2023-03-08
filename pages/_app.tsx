import type { AppProps } from 'next/app'
import { Noto_Sans_KR } from 'next/font/google'
import { ThemeProvider } from '@emotion/react'

import { theme } from '@/styles/theme'
import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'

const NotoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${NotoSansKR.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Toaster />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
