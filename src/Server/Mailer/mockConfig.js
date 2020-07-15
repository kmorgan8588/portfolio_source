/**
 * This is an example of the config object used by the createTransport method of nodemailer
 * If you want to setup this for yourself, copy this file and mark it as setupConfig.js and
 * fill in your details.  For more information visit the nodemailer docs at https://nodemailer.com/about/
 * Remove debug/logger if you're moving to 'production'
 */


module.exports = {
  service: 'gmail',
  auth: {
    user: "example@gmail.com",
    pass: 'ExamplePassword',
  },
  debug: true,
  logger: true
};

