const HtmlWebpackPlugin = require("html-webpack-plugin");
//Installed packages: webpack webpack-cli
module.exports = {
  module: {
    rules: [
      //Installed packages: @babel/core @babel/preset-env @babel/preset-react babel-loader
      {
        test: /\.(js|jsx)$/,
        exclude: /nodu_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      //Installed packages: style-loader css-loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //Installed packages: html-loader html-webpack-plugin
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
