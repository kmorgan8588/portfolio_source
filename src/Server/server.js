const express = require('express');
const path = require('path');

const Post = require('./Controllers/postEmail');

const app = express();


app.use(express.static(path.resolve(__dirname, "..", "Static"), {dotfiles: "allow"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.route('/email')
  .post(Post);

module.exports = app;
