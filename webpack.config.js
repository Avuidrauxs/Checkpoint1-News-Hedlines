var webpack = require("webpack");
var path = require("path");

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
      actions: "app/action/actions.jsx",
      reducers: "app/reducer/reducers.jsx"
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
