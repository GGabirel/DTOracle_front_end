const path = require("path");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: "./src/assets/js/main.js",
    app: "./src/ori-control-js/app.js",
    login: "./src/ori-control-js/login.js",
    login_next: "./src/ori-control-js/login-next.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./src/assets/control-js"),
  },
  devServer: { contentBase: path.join(__dirname, "src"), compress: true },
};
