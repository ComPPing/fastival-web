import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import { Noto_Sans_KR } from 'next/font/google'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { UserInfo } from 'firebase/auth'
import { ThemeProvider } from '@emotion/react'
import { Toaster } from 'react-hot-toast'

import { theme } from '@/styles/theme'
import '@/styles/globals.css'

const NotoSansKR = Noto_Sans_KR({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

const firebaseConfig = {
  // Firebase 프로젝트 설정
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

firebase.initializeApp(firebaseConfig)

// Initialize firebase and google providerfirebase.initializeApp(firebaseConfig);
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(provider)
const signOut = () => auth.signOut()

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<UserInfo | null>(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      setUser(user)
    })
  }, [])

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${NotoSansKR.style.fontFamily};
        }
      `}</style>
      <ThemeProvider theme={theme}>
        <Toaster />
        <Component
          {...pageProps}
          user={user}
          signIn={signIn}
          signOut={signOut}
        />
      </ThemeProvider>
    </>
  )
}
