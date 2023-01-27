/** @format */

const RESOURCE_PATH = "/home";

const viewController = {
  index(req, res) {
    res.render("portfolio/Index", res.locals.data);
  },
  show(req, res) {
    res.render("portfolio/Show", res.locals.data);
  },
  edit(req, res) {
    res.render("portfolio/Edit", res.locals.data);
  },
  newView(req, res) {
    res.render("portfolio/New");
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH);
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  },
};

module.exports = viewController;
