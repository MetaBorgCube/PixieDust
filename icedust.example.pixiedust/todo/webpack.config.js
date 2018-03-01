var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './main',
  
  output: {
    path: path.join(__dirname, 'target/'),
    filename: '[name].js'
  },
  
  module: {
  	rules: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      
      {
      	test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: [
          {
            loader:  'url-loader',
            options: {
              limit: 100000,
              name: '[name].[ext]'
            }
          }
        ]
      }
  	]
  },
  
  devtool: 'inline-source-map',
  resolve: {
    modules: [
    	path.join(__dirname, 'node_modules')
    ]
  },

  plugins: [
  ],
  
  devServer: {
  	publicPath: '/target',
  	port: 8080
  }
  
};