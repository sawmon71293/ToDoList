const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  "webpack": {
    "mode": "production",
    "entry": "./src/index.js",
    "output": {
      "filename": "main.js",
      "path": __dirname + "/dist",
      "publicPath": "/ToDoList/"
    },
    "plugins": [
      new HtmlWebpackPlugin({
        "template": "./src/index.html"
      })
    ]
  },
  output: {
    filename: 'main.js',
    publicPath: '/ToDoList/src/',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, 'public'),
  },
};
