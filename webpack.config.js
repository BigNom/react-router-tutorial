var webpack = require('webpack')

module.exports = {
  entry: [
      'script!jquery/dist/jquery.min.js',
      'script!foundation-sites/dist/foundation.min.js',
      './index.js',
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
      new webpack.ProvidePlugin({
          '$':'jquery',
          'jQuery': 'jquery'
      })
  ],

  // add this handful of plugins that optimize the build
// when we're in production
plugins: process.env.NODE_ENV === 'production' ? [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin()
] : [],

  output: {
      path: 'public',
    filename: 'bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
