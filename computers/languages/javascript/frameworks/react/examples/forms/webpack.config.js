const path = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const mode = argv && argv.mode || 'development'
  const prod = argv.mode === 'production'

  const stats = {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: false,
    errorDetails: false,
    warnings: false,
    chunks: false,
    modules: false,
    reasons: false,
    source: false,
    publicPath: false,
  }

  return {
    mode,
    stats,
    devServer: { stats },
    context: path.resolve(__dirname, 'src'),
    entry: {
      main: './index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].[id].js',
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?/,
          use: 'eslint-loader',
        },
        {
          test: /\.jsx?/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            prod ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        }
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        'sw.js',
        'manifest.json',
      ]),
      new HtmlWebpackPlugin({ template: 'index.html' }),
      new MiniCssExtractPlugin(),
      new FriendlyErrorsWebpackPlugin(),
    ],
  }
}
