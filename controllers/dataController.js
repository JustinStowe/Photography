/** @format */

const multer = require("multer");
const Photo = require("../../models/Photo");

const dataController = {
  index(req, res, next) {
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
    // Use Multer to handle file upload and add the filename and path to the request body
    const upload = multer({ dest: " ./public/uploads/" }).single("photo");
    upload(req, res, (err) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
        });
      } else {
        req.body.photo = req.file.filename;
      }
    });
    // Use Model to create Photo Document
    Photo.create(req.body, (error, createdPhoto) => {
      // Once created - respond to client
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.photo = createdPhoto;
        next();
      }
    });
  },
  show(req, res, next) {
    Photo.findById(req.params.id, (error, foundPhoto) => {
      if (error) {
        res.status(404).send("Photo not found");
      } else {
        const img = fs.readFileSync(`./public/uploads/${foundPhoto.Photo}`);
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.end(img, "binary");
        res.locals.data.photo = foundPhoto;
        next();
      }
    });
  },
  update(req, res, next) {
    Photo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
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
