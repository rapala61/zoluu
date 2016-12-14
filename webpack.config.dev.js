const HtmlWebpackPlugin = require('html-webpack-plugin');

// const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: true,
  entry: {
    bundle: [
      './public/src/js/global.js',
      './public/src/html/templates/footer/footer.js',
      './public/src/html/templates/header/header.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'],
    about: [
      './public/src/html/templates/main/about/about.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'
    ],
    home: [
      './public/src/html/templates/main/home/home.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080'],
    energyAudit: [
      './public/src/html/templates/main/energy_audit/energy_audit.js',
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080']
  },
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.html/,
        loader: 'html'
      },
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
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap&sourceComments'
        // loader: 'style!css?sourceMap!autoprefixer!sass?sourceMap&sourceComments'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
          'url',
          'image-webpack?{optimizationLevel: 6, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}'
        ]
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
    new HtmlWebpackPlugin({
      title: 'Zoluu Home',
      template: 'public/src/html/main.html',
      chunks: ['home', 'bundle']
    }),
    new HtmlWebpackPlugin({
      title: 'Energy Audit',
      filename: 'energy_audit.html',
      template: './public/src/html/energy_audit.html',
      chunks: ['energyAudit', 'bundle']
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      filename: 'about.html',
      template: './public/src/html/about.html',
      chunks: ['about', 'bundle']
    })
  ]
};
