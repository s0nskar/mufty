var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: './main.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        },
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'less'],
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less'],
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
};
