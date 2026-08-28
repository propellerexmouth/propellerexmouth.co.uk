const { holdingPage, holdingRedirects } = require('./holding.config');

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
          // While the holding page is up, every other page points back at it.
          // These are temporary (307) so search engines keep the real pages.
          ...(holdingPage
            ? holdingRedirects.map((source) => ({
                source,
                destination: '/',
                permanent: false,
              }))
            : []),
        ]
    }
}

module.exports = nextConfig
