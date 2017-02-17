const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'feature-tags.min.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
  ]
};
