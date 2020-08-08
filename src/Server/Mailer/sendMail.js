const transporter = require('./transport');


module.exports = sendMail = (mailOptions, res) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.status(500).json('fail');
    } else {
      console.log('Email sent: ', info.response);
      res.status(200).json('success');
    }
  })
}
