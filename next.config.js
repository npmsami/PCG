/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.builder.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        port: '',
        pathname: '/api/v1/image/assets/**',
      },
    ],
  },
  experimental: {
    styledComponents: true
  }
}

module.exports = nextConfig
