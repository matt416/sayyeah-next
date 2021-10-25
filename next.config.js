module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  // async rewrites() {

  //   return {
  //     fallback: [
  //       {
  //         source: '/:path*',
  //         destination: `https://kanetix.sayyeah.work/:path*`,
  //       },
  //     ],
  //   }
  // }
  trailingSlash:true,

  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'x-hello',
  //           value: 'there',
  //         },
  //       ],
  //     },
  //   ]
  // },
  async redirects() {
      return [
        {
          source: '/solutions/inclusive-website-design/',
          destination: '/services/inclusive-website-design/',
          permanent: false,
        },
        {
          source: '/essential',
          destination: '/essential-website-audit/',
          permanent: true,
        },
        {
          source: '/essential-audit',
          destination: '/essential-website-audit/',
          permanent: true,
        },
      ]
  },
  async rewrites() { // Fallback on production, don't do this locally please!
    return process.env.NODE_ENV === "production" ? {
      fallback: [
        {
          source: '/:path*',
          destination: `https://insights.sayyeah.com/:path*/`,
        },
      ],
    } : []
  }
}