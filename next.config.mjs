/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pikaso.cdnpk.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
