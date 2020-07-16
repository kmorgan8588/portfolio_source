require('dotenv').config();

const USER = process.env.USER;
const PASS = process.env.PASS;

module.exports = {
  service: 'gmail',
  auth: {
    user: USER,
    pass: PASS,
  },
};
