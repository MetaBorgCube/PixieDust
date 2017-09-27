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
        test: /\.(css|scss)$/,
        use: [
        	{
        		loader: 'style-loader'
        	},
        	
        	{
        		loader: 'css-loader'
        	},
        	
        	{
        		loader: 'sass-loader'
        	}
        ]
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
    	path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'src/runtime')
    ]
  },

  plugins: [
  ],
  
  devServer: {
  	publicPath: '/target',
    // host: '0.0.0.0',
  	port: 9000
  }
  
};