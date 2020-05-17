const webpack = require('webpack');

const isProd = process.env.NODE_ENV === 'production';

const assetPrefix = isProd ? '/countries' : '';

module.exports = {
  assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      })
    );

    return config;
  },
};
