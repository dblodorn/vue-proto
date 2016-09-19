const path = require('path')
const WebpackShellPlugin = require('webpack-shell-plugin')
const webpack = require('webpack')
const PATHS = {
  app: path.join(__dirname, './public/_js/')
}

module.exports = {
  entry: {
    app: ['./public/_src/index.js'],
    vendor: ["jquery"]
  },
  output: {
    path: path.resolve(__dirname, './js'),
    publicPath: 'js',
    filename: 'app.js'
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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
  ],
  externals: {
    "pixi": "PIXI"
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
  module.exports.output = {
    path: path.resolve(__dirname, './public/js'),
    filename: './[name].js'
  }
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
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
      onBuildStart:['echo "Webpack Run"'],
      onBuildEnd:[
        'npm run ftp'
      ]
    })
  ])
}