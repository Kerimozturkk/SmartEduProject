const User = require('../models/User');

module.exports = (req, res, next) => { // session olmadan /users/dashboard'a erişme
  User.findById(req.session.userID, (err, user) => {
    if (err || !user) return res.redirect('/login'); // bir hata varsa ve ya user yoksa
    next();
  });
};
