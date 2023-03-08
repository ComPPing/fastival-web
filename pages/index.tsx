import Head from 'next/head'
import LandingPage from '@/components/template/landing-page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast!val</title>
        <meta name="description" content="유니들을 위한 축제 서비스" />
      </Head>
      <LandingPage />
    </>
  )
}
