const assignOptions = require('../Mailer/assignOptions');
const sendMail = require('../Mailer/sendMail');

module.exports = Post = (req, res) => {
  const mailOptions = assignOptions(req.body);
  sendMail(mailOptions, res);
}
