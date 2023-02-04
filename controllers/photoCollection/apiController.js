/** @format */

const apiController = {
  index(req, res, next) {
    res.json(res.locals.data.photo);
  },
  show(req, res, next) {
    res.json(res.locals.data.photo);
  },
};

module.exports = apiController;
