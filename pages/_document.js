import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          // eslint-disable-next-line max-len
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@200;300;400;500;600;700;800;900&family=Nunito:wght@400;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}