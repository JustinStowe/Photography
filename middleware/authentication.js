/** @format */

function checkAuth(req, res, next) {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
}

module.exports = checkAuth;

function logStatus(req, res, next) {
  if (req.session.loggedIn) {
    req.isAuthenticated = true;
  } else {
    req.isAuthenticated = false;
  }
  next();
}

module.exports = logStatus;
