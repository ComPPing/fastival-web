import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {' '}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!-- Primary Meta Tags --> */}
        <title>Fast!val</title>
        <meta name="title" content="Fast!val" />
        <meta
          name="description"
          content="유니들을 위한 축제서비스, Fast!val입니다"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastival-web.vercel.app/" />
        <meta property="og:title" content="Fast!val" />
        <meta
          property="og:description"
          content="유니들을 위한 축제서비스, Fast!val입니다"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
        {/* <!-- Twitter --/> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://fastival-web.vercel.app/"
        />
        <meta property="twitter:title" content="Fast!val" />
        <meta
          property="twitter:description"
          content="유니들을 위한 축제서비스, Fast!val입니다"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
