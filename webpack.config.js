var webpack = require('webpack');
var path = require('path');

var JS_DIR = path.resolve(__dirname, 'src/assets/js');

module.exports = {
  entry: JS_DIR + '/index.jsx',
  output: {
    path: JS_DIR,
    filename: 'index.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: JS_DIR,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
