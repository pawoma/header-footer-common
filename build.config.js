process.env.NODE_ENV = '"production"';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.build.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'index.js'
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
        use: ExtractTextPlugin.extract([{ loader: "css-loader" }, { loader: "less-loader" }])
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader' }
      }
    ]
  },
  plugins:[
    new ExtractTextPlugin({
      filename: 'header-footer.css'
    })
  ]
};