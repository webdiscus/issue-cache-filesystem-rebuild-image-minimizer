const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    clean: true,
  },
  entry: {
    main: './src/main.js', // <= here is required an image
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|webp|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [
      // BUG: after rebuild occurs the Error: Can't handle conflicting asset info for sourceFilename
      new ImageMinimizerPlugin({
        test: /\.(png|jpe?g|webp|svg)$/i,
        deleteOriginalAssets: false,
        minimizer: {
          implementation: ImageMinimizerPlugin.svgoMinify,
        },
      }),
    ],
  },

  // the issuer occurs only by cache `filesystem`
  cache: {
    type: 'filesystem',
    cacheDirectory: path.join(__dirname, '.cache'),
  },
};
