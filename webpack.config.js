const path = require('path')
const { VueLoaderPlugin } = require("vue-loader"); // плагин для загрузки кода Vue
const AmdWebpackPlugin = require('amd-webpack-plugin');
const ZipFilesPlugin = require('webpack-zip-files-plugin');
const Dotenv = require('dotenv-webpack');

const ENV = 'dev';

module.exports = {
  entry: ['./src/main.js'],
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app.js',
    libraryTarget: 'amd'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ["@babel/plugin-proposal-class-properties", { "loose": true }]
          ]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        )
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        loader: 'vue-pug-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.css'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new AmdWebpackPlugin(),
    new Dotenv(),
    new ZipFilesPlugin({
      entries: [
        { src: path.join(__dirname, './dist/'), dist: '/' }
      ],
      output: path.join(__dirname, './widget'),
      format: 'zip',
    }),
  ],
}
