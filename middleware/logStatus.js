/** @format */

function logStatus(req, res, next) {
  if (req.session.loggedIn) {
    req.isAuthenticated = true;
  } else {
    req.isAuthenticated = false;
  }
  next();
}

module.exports = logStatus;