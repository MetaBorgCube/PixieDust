var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: './src/index',
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'target'),
    filename: '[name].generated.js'
  },
  
  module: {
  	
  	rules: [
  		{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
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
      "node_modules"
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
    	compress: {
        warnings: false,
        drop_console: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
//  	new webpack.ProvidePlugin({   
//      jQuery: 'jquery',
//      $: 'jquery',
//      jquery: 'jquery'
//  	})
  ]
};