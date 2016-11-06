const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

// https://github.com/webpack/extract-text-webpack-plugin/issues/30#issuecomment-125757853
const PROD = process.env.NODE_ENV === 'production' ? true : false;
const styles = 'css?sourceMap!autoprefixer!sass?sourceMap';

module.exports = {
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './public/src/js/scripts.js'
  ],
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: 'bundle.js',
    publicPath: PROD ? '' : 'http://localhost:8080/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          // presets: ['react', 'es2015'],
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        loader: PROD ? ExtractTextPlugin.extract(styles) : 'style!css?sourceMap!autoprefixer!sass?sourceMap&sourceComments'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url'
      },
      {
        test: /\.woff$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file?name=fonts/[hash].[ext]'
      },
      {
        test: /\.woff2$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'file?name=fonts/[hash].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ]
};
