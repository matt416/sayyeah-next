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

  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://live.sayyeah.work/`,
        },
      ],
    }
  }
}