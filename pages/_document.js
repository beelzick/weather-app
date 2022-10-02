import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          // eslint-disable-next-line max-len
          href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Nunito:wght@400;600;700;900&display=swap'
          rel='stylesheet'
        />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#e763e8' />
        <meta name='msapplication-TileColor' content='#603cba' />
        <meta name='theme-color' content='#E763E8' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
