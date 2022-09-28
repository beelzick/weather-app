import Layout from '@/components/Layout'
import OverlayContextProvider from '@/utils/OverlayContext'
import '@/styles/index.scss'

function MyApp({ Component, pageProps }) {
  return (
    <OverlayContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </OverlayContextProvider>
  )
}

export default MyApp
