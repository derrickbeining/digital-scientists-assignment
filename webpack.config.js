const { resolve } = require('path');

module.exports = {
  entry: [
    './node_modules/webrtc-adapter/out/adapter_no_global.js',
    './src/index.js'
  ],
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
