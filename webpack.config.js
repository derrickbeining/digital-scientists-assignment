const { resolve } = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname),
    filename: 'main.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
}
