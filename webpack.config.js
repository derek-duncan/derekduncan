module.exports = {
  context: __dirname + '/react',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'react', 'stage-3'],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.md$/,
        use: ['html-loader', 'markdown-loader'],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './react', './docs'],
  },
  entry: {
    main: './index.js',
  },
  output: {
    path: __dirname + '/public/scripts',
    filename: '[name].bundle.js',
  },
};
