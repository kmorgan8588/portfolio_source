const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'App', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'src', 'Static'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
