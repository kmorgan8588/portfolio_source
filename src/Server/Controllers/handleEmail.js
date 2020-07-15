const transporter = require('../Mailer/transport');


module.exports = handleEmail = (req, res) => {
  const { name, subject, email, message } = req.body;
  const mailOptions = {
    from: email,
    replyTo: email,
    to: 'kmorgan8588@gmail.com',
    subject,
    text: message + '\n' + name
  }
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      //res.redirect(oops page)
    } else {
      console.log('Email sent: ', info.response);
      res.redirect('/contact.html');
    }
  })

}

// transporter.verify((err, success) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Let's email!");
//   }
// })
