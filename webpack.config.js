'use strict';

const webpack = require('webpack');

module.exports = {
  context: __dirname + '/react',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
        ],
      },
      {
        test: /\.md$/,
        use: [
          'html-loader',
          'markdown-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './react', './docs'],
  },
  entry: {
    derek: './derek.js',
  },
  output: {
    path: __dirname + '/public/scripts',
    filename: '[name].bundle.js',
  },
};
