module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"]
  //   });

  //   return config;
  // },
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
  async redirects(){
    return [
      {
        source: '/solutions/inclusive-website-design/',
        destination: '/services/inclusive-website-design/',
        permanent: false,
      },{
        source: '/essential',
        destination: '/essential-website-audit/',
        permanent: true,
      },{
        source: '/essential-audit/',
        destination: '/essential-website-audit/',
        permanent: true
      },{
        source: '/services/user-experience-design-service/',
        destination: '/services/user-experience-design/',
        permanent: true
      },{
        source: '/services/user-interface-design-service/',
        destination: '/services/user-interface-design/',
        permanent: true
      },{
        source: '/services/front-end-web-development-service/',
        destination: '/services/front-end-web-development/',
        permanent: true
      },{
        source: '/digital-insights/user-experience-is-a-feeling-uxmatters/',
        destination: '/digital-insights/user-experience-is-a-feeling/',
        permanent: true
      },{
        source: '/digital-insights/website-builder-accessibility-comparison/',
        destination: '/digital-insights/2021-website-builder-accessibility-comparison/',
        permanent: true
      },{
        source: '/services/inclusive-website-design/',
        destination: '/solutions/inclusive-website-design/',
        permanent: true
      },{
        source: '/solutions/organizational-wide-digital-innovation/',
        destination: '/solutions/',
        permanent: true
      },{
        source: '/approach/inclusive-design/',
        destination: '/solutions/inclusive-design/',
        permanent: true
      },{
        source: '/approach/service-design/',
        destination: '/solutions/service-design/',
        permanent: true
      },{
        source: '/approach/product-strategy/',
        destination: '/solutions/product-strategy/',
        permanent: true
      },{
        source: '/solutions/new-digital-initiatives/',
        destination: '/solutions/',
        permanent: true
      },{
        source: '/solutions/existing-digital-initiatives/',
        destination: '/solutions/',
        permanent: true
      },{
        source: '/approach/research/',
        destination: '/solutions/market-research/',
        permanent: true
      },{
        source: '/social/',
        destination: '/contact-us/',
        permanent: true
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








