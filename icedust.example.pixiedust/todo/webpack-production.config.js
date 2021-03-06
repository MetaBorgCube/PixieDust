var merge = require('webpack-merge');
var config = require('./webpack.config');
var webpack = require('webpack');

var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(config, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      parallel: {
        cache: true
      , workers: 4
      }
    , mangle: false
    , compress: {
        keep_fnames: true
      }
    })
  , new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
});