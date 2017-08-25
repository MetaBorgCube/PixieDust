var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './main',
  output: {
    path: path.join(__dirname, 'target'),
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
  	new webpack.ProvidePlugin({   
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
  	})
  ],
  
  devServer: {
  	publicPath: '/target',
  	port: 9002
  }
};