/** @format */

const Photo = require("../../models/photo");
const upload = require("../../middleware/uploadEngine");
const dataController = {
  index(req, res, next) {
    res.locals.data = {};
    console.log("username", req.session.username);
    if (!req.session.loggedIn) {
      Photo.find({ restricted: false }, (error, allPhotos) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.loggedIn = req.session.loggedIn;
          res.locals.data.photos = allPhotos;
          next();
        }
      });
    } else {
      Photo.find(
        { username: String(req.session.userId) },
        (error, allPhotos) => {
          console.log("user id", req.session.userId);
          if (error) {
            res.status(404).send({
              msg: error.message,
            });
          } else {
            res.locals.data.loggedIn = req.session.loggedIn;
            res.locals.data.photos = allPhotos;
            next();
          }
        }
      );
    }
  },
  create(req, res, next) {
    req.body.username = req.session.username;
    upload.single("image")(req, res, (err) => {
      if (err) {
        return res.status(404).json({ msg: err.message });
      }
      req.body.name = req.body.name;
      req.body.image = req.file.buffer;
      req.body.contentType = req.file.mimetype;
      req.body.restricted = req.body.restricted === "on" ? true : false;
      req.body.username = req.session.userId;

      Photo.create(req.body, (error, createdPhoto) => {
        if (error) {
          return res.status(404).json({ msg: error.message });
        }
        res.locals.data.loggedIn = req.session.loggedIn;
        res.locals.data.photo = createdPhoto;
        next();
      });
    });
  },
  show(req, res, next) {
    Photo.findById(req.params.id, (error, foundPhoto) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.loggedIn = req.session.loggedIn;
        res.locals.data.photo = foundPhoto;
        next();
      }
    });
  },

  update(req, res, next) {
    if (req.file) {
      req.body.image = req.file.buffer;
      req.body.contentType = req.file.mimetype;
    }
    Photo.findByIdAndUpdate(
      req.params.id,
      req.body,

      (error, updatedPhoto) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.loggedIn = req.session.loggedIn;
          res.locals.data.photo = updatedPhoto;
          next();
        }
      }
    );
  },

  destroy(req, res, next) {
    Photo.findByIdAndRemove(req.params.id, (error, photo) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.loggedIn = req.session.loggedIn;
        res.locals.data.photo = photo;
        next();
      }
    });
  },
};

module.exports = dataController;
