const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/scripts/index.js',
    app: './src/scripts/app.js'
  },  

  devtool: "none",

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      filename: 'app.html',
      template: './src/app.html',
      chunks: ['app']
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: {
            loader: "file-loader",
            options: {
              publicPath: 'assets',
              name: "[name].[hash].[ext]",
              outputPath: "assets/"
            }
          }
      }
    ],
  },
};