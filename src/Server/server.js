const express = require('express');
const path = require('path');
const mailer = require('nodemailer');
const options = require('./Mailer/setupConfig');
const Post = require('./Controllers/handleEmail');

const app = express();


app.use(express.static(path.resolve(__dirname, '..', "Static")));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.route('/email')
  .post(Post);

module.exports = app;
