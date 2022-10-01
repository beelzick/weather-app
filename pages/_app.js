import NextNProgress from 'nextjs-progressbar'
import Layout from '@/components/Layout'
import OverlayContextProvider from '@/utils/OverlayContext'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <OverlayContextProvider>
      <NextNProgress color='rgba(255,255,255, 0.6)' options={{ showSpinner: false }} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OverlayContextProvider>
  )
}

export default MyApp
