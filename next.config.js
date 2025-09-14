/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.builder.io',
        port: '',
        pathname: '/api/v1/image/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true
  },
  compiler: {
    styledComponents: true
  },
  experimental: {
    forceSwcTransforms: true,
  },
  output: 'export',
  distDir: 'out'
}

module.exports = nextConfig