/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/fast-music-remover',
  assetPrefix: '/fast-music-remover',
}

module.exports = nextConfig 