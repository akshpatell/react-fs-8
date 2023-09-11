## npm init -y

## npm install --save-dev webpack webpack-cli webpack-dev-server

## webpack.config.js

- set entry and output
- const path = require("path");
  module.exports = {
  entry: path.resolve(**dirname, "src/index.js"),
  output: {
  path: path.resolve(**dirname, "dist"),
  filename: "my-first-webpack.bundle.js",
  },
  };

## add html-webpack-plugin

## add loaders

- module: {
  rules: [
  { test: /\.jsx?$/, use: 'babel-loader' },
  { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
  ]},

## add dev server

## setup eslint

- npm init @eslint/config

## setup prettier

- npm i -D prettier
- .prettierrc.json

## setup babel

- .babelrc
- {
  "presets": ["@babel/preset-env", "@babel/preset-react"]
  }

## setup react

- npm i react react-dom
