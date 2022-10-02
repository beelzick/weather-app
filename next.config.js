/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  disable: process.env.NODE_ENV !== 'production',
  dest: 'public',
  register: true,
  skipWaiting: true,
})

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    prependData: `
    @import '@/styles/colors';
    @import '@/styles/breakpoints';
    @import '@/styles/mixins';
    @import '@/styles/font-weight';
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
})

module.exports = nextConfig
