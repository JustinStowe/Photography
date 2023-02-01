/** @format */

const RESOURCE_PATH = "/home";

const viewController = {
  index(req, res) {
    res.render("publicPortfolio/Index", res.locals.data);
  },
  userIndex(req, res) {
    res.render("/user/index");
  },
  show(req, res) {
    res.render("publicPortfolio/Show", res.locals.data);
  },
  userShow(req, res) {
    res.render("/user/show");
  },
  edit(req, res) {
    res.render("user/Edit", res.locals.data);
  },
  newView(req, res) {
    res.render("user/New");
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH);
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  },
};

module.exports = viewController;
