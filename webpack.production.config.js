/*eslint-env node */

const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin')
const webpack = require('webpack')
const PATHS = {
  app: path.join(__dirname, './public/_js/')
}

module.exports = {
  entry: {
    app: ['./public/_src/index.js']
  },
  output: {
    path: __dirname,
    filename: './[name].js'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.sass|css$/,
        loaders: [
          "style",
          "css",
          "sass"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  externals: {
    "jquery": "$"
  },
  devtool: '#source-map',
  plugins: [
    new webpack.DefinePlugin({ 'PROD_ENV': true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new WebpackShellPlugin({
      onBuildStart:['echo "Webpack Start"'],
      onBuildEnd:[
        'npm run ftp'
      ]
    })
  ],
  stats: { colors: true }
}