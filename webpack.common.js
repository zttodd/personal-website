const path = require("path");

module.exports = {
  // entry: "./src/js/index.js",
  output: {
    filename: "site.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: [["@babel/preset-env", { modules: false }]]
        }
      }
    ]
  }
};
