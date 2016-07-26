var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/js/main.js',
  output: {
    filename: './build/js/bundle.js'
  },

  watch: true,

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
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./build/style/bundle.css')
  ]

};
