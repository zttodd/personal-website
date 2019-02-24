const path = require("path");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "site.js"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
