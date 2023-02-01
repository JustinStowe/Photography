/** @format */

const Photo = require("../../models/photo");
const upload = require("../../middleware/uploadEngine");
// { username: req.session.username },
const dataController = {
  index(req, res, next) {
    Photo.find((error, allPhotos) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.photos = allPhotos;
        next();
      }
    });
  },
  userIndex(req, res, next) {
    Photo.find({ username: req.session.username }, (error, allPhotos) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.photos = allPhotos;
        next();
      }
    });
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

      // Use Model to create Photo Document
      Photo.create(req.body, (error, createdPhoto) => {
        // Once created - respond to client
        if (error) {
          return res.status(404).json({ msg: error.message });
        }
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
    console.log(req.body);
    Photo.findByIdAndUpdate(
      req.params.id,
      req.body,

      (error, updatedPhoto) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
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
        res.locals.data.photo = photo;
        next();
      }
    });
  },
};

module.exports = dataController;
