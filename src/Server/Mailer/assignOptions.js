module.exports = assignOptions = (options) => {
  const { name, subject, email, message } = options;
  return ({
      from: email,
      replyTo: email,
      to: 'kmorgan8588@gmail.com',
      subject,
      text: message + '\n' + name
    })
};

