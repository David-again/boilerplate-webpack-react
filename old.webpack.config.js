const path = require('path');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
  devServer: {
      contentBase: path.join(__dirname, 'src'),
      hot: true,
      port: 3000
  },
  mode: "development",
  module: {
      rules: [
          {
              test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          }
      ]
  }
};