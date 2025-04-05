import type { NextConfig } from 'next'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

const nextConfig: NextConfig = {
  output: 'standalone',
}

export default nextConfig

initOpenNextCloudflareForDev()
