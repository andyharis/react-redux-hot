const path = require('path');
var webpack = require('webpack');
module.exports = {
  output: {
    filename: 'bundle.js',
    // the output bundle
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
  },
  devtool: 'inline-source-map',
  resolve: {
    modules: ["node_modules", "src"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
};