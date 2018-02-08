var webpack = require("webpack");
var path = require("path");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/js/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: "jQuery"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: "/",
    filename: "bundle.js"
  },
  target: 'web',
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: "app/styles/app.scss",
      actions: "app/action/NewsActions.jsx"
    },
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader",
        query: {
          name: "static/media/[name].[ext]"
        }
      },
      {
          test: /\.scss$/,
          loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss")
    ]
  },
  devtool: "cheap-module-eval-source-map"
};
