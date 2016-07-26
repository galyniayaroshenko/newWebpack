var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  // context: __dirname + '/app',
  entry: './app/main.js',
  output: {
    path: './build/',
    filename: 'bundle.js'
  },

  watch: NODE_ENV == 'development',

  resolve: {
    modulesDirectories: ['node_modules']
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file'
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./bundle.css'),
    // new webpack.ProvidePlugin({
    //   pluck: 'lodash'
    // })
    new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        output: {
            comments: false
        },
        compress: {
            warnings: false
        }
    })

  ]

};
