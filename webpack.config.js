const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/main.js'),
    // anoterPage: path.resolve(__dirname, './src/anoterPage/anoterPage.js'),
  },
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   filename: '[name].bundle.js',
  // },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'some name',
      template: path.resolve(__dirname, './src/index.html'), // template file
      filename: 'index.html', // output file
      chunks: ['main']
    }),
    // new HtmlWebpackPlugin({
    //   title: 'pe viitor',
    //   template: path.resolve(__dirname, './src/anoterPage/index.html'), // template file
    //   filename: 'anoterPage/index.html', // output file
    //   chunks: ['anoterPage']
    // }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 2001, // you can set any server you need
  },
  module: {
    rules: [
      // Javascript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ]
  }
}
