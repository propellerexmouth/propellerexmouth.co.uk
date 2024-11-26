/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
      styledComponents: true
    },
    async redirects() {
        return [
          {
            source: '/join',
            destination: '/',
            permanent: true,
          },
        ]
    }
}

module.exports = nextConfig
