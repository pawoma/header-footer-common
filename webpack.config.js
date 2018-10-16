const env = process.env.NODE_ENV
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
let lessLoaderOpt = null
let plugins = null

console.log('this mode is ', env)

// 开发环境
if (env === 'development') {
  lessLoaderOpt = [
    { loader: "style-loader" },
    { loader: "css-loader" },
    { loader: "less-loader" }
  ]
  plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'src/index.html')
    })
  ]
}

// 生产环境
if (env === 'production') {
  lessLoaderOpt = ExtractTextPlugin.extract([
    { loader: "css-loader" },
    { loader: "less-loader" }
  ])
  plugins = [
    new ExtractTextPlugin({
      filename: 'header-footer.css'
    })
  ]
}

module.exports = {
  entry: './src/index.dev.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.css', '.less']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: lessLoaderOpt
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' }
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8899,
    open: true
  }
};