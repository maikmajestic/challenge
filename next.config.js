const withCSS = require('@zeit/next-css');
const withImages = require('next-images')

module.exports = withCSS({
  distDir: 'build',
  env: {
    API_URL: process.env.API_URL,
    COUNTRY_CODE: process.env.COUNTRY_CODE,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
});
