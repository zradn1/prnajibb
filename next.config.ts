import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  allowedDevOrigins: [
    '**.manuspre.computer',
    '8328-iasefp2i9xa0nxabj2783-b62e17f4.us4.manus.computer',
    '3000-iasefp2i9xa0nxabj2783-b62e17f4.us4.manus.computer',
    '127.0.0.1',
  ],
  trailingSlash: true,
}

export default nextConfig
