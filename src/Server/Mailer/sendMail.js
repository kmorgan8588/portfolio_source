const transporter = require('./transport');


module.exports = sendMail = (mailOptions, res) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect('/whoops.html');
    } else {
      console.log('Email sent: ', info.response);
      res.redirect('/success.html');
    }
  })
}
