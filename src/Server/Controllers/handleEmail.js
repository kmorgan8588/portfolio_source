module.exports = handleEmail = (req, res) => {
  console.log(req.body);
  res.redirect('/contact.html');
}
