module.exports = (req, res, next) => {
  // user url'den login ve ya register sayfasına ulaşamasın

  if (req.session.userID) {
    return res.redirect('/');
  }
  next();
};
