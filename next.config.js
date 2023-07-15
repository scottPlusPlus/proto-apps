const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/',
            destination: '/rock',
          },
        ]
      },
}

module.exports = withContentlayer(nextConfig)