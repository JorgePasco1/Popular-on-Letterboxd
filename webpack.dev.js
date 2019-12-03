const path = require('path');
const common = require("./webpack.common");
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'src'),
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  }
});