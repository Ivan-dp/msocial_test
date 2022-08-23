const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  stats: {
    children: false,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    index: "./src/pages/index/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].[hash]bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/pages/index/index.pug",
      chunks: ["index"],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // JavaScript

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      // изображения

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        loader: "file-loader",
        options: {
          name: "./dist/icons/[name].[ext]",
        },
      },

      // шрифты и SVG

      {
        test: /\.(woff|eot|ttf|svg|)$/,
        type: "asset/inline",
      },

      // CSS, PostCSS, Sass

      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },

      // pug

      {
        test: /\.pug$/,
        use: {
          loader: "pug-loader",
          options: {
            pretty: true,
          },
        },
      },
    ],
  },
};
