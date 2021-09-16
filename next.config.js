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
  async rewrites() {

    return {
      fallback: [
        {
          source: '/:path*',
          destination: `https://sayyeah.com/:path*`,
        },
      ],
    }
  }
};