const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack');

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',


  // Enable: It is possible testing in IE 11, but reload / replacement will break due to a bug in webpack 5 !
  // Disable: It is possible to use hot relad / replacement but not using IE 11 !
  // target: ['web', 'es5'],

  // Spin up a server for quick development
  devServer: {
    historyApiFallback: true,
    // static: {
    //   directory: path.join(__dirname, './dist')
    // },
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),],

  module: {
    rules: [
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(sass|scss|css)$/,
        use: [
          // 'vue-style-loader',
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
})
