/** @format */

function checkAuth(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
}

module.exports = checkAuth;
