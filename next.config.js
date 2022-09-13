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
}

module.exports = nextConfig
