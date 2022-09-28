/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `
    @import '@/styles/colors';
    @import '@/styles/breakpoints';
    @import '@/styles/mixins';
    `,
  },
  redirects() {
    return [
      {
        source: '/',
        destination: '/warszawa',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
