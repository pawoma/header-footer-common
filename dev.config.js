process.env.NODE_ENV = '"development"';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.dev.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.less$/,
        use: [{ loader: "style-loader" },{ loader: "css-loader" }, { loader: "less-loader" }]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8899
  }
};