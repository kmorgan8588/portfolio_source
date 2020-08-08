const transporter = require('./transport');

module.exports = sendMail = (mailOptions, res) => {
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      res.status(500).json('fail');
    } else {
      res.status(200).json('success');
    }
  })
};
