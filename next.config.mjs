/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,

  basePath: '/bmw-interview',
  assetPrefix: '/bmw-interview/',

}

export default nextConfig
