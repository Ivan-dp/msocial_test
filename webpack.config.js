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
    // contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },
  entry: {
    // index: path.resolve(__dirname, "./src/index.js"),
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
        type: "asset/resource",
      },

      //   {
      //     test: /\.(jpg|png)$/,
      //     use: {
      //       loader: 'url-loader',
      //     },
      //   },

      // шрифты и SVG
      {
        test: /\.(woff|eot|ttf|svg|)$/,
        type: "asset/inline",
      },

      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        // exclude: /node_modules/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      // {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      // },
      // {
      //   test: /\.css$/,
      //   use: ["style-loader", "css-loader", "postcss-loader"],
      // },

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
