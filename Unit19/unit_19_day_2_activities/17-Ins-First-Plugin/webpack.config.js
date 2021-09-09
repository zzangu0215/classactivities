const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = {
  entry: './src/app.js',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  mode: 'development',
  plugins: [new BundleAnalyzerPlugin()],
};
module.exports = config;
