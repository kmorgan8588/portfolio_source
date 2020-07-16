const nodemailer = require('nodemailer');
const config = require('./setupConfig');


module.exports = nodemailer.createTransport(config);
