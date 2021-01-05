"use strict";

const path = require("path");

/**@type {import('webpack').Configuration}*/
const config = {
  target: "web",
  mode: "production",
  entry: "./src/webview/index.tsx",
  output: {
    path: path.resolve(__dirname, "..", "assets/webview"),
    filename: "index.js",
    libraryTarget: "umd",
  },
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
module.exports = config;
