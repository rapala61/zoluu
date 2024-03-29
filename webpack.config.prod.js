const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

// const styles = 'css?sourceMap!autoprefixer!sass?sourceMap';
const styles = 'css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer-loader!resolve-url-loader!sass-loader?sourceMap&sourceComments';

module.exports = {
  entry: {
    bundle: [
      './public/src/js/global.js',
      './public/src/html/templates/footer/footer.js',
      './public/src/html/templates/header/header.js'],
    about: [
      './public/src/html/templates/main/about/about.js'
    ],
    home: [
      './public/src/html/templates/main/home/home.js'
    ],
    energyAudit: [
      './public/src/html/templates/main/energy_audit/energy_audit.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public/dist/'),
    filename: '[name].bundle.js',
    publicPath: ''
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
        loader: ExtractTextPlugin.extract(styles)
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
    new ExtractTextPlugin('[name]_[id]_[contenthash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'Zoluu',
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
