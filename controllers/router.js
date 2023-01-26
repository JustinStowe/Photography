/** @format */

const express = require("express");
const Photograph = require("../models/Photograph");
const router = express.Router();

// Data controller
// const dataController = require("./dataController");
// const viewController = require("./viewController");
// const apiController = require("./apiController");

router.use((req, res, next) => {
  console.log("session", req.session);

  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

/**
 * Photograph - Api routes
 */
/*
// Index - Api
router.get("/api", dataController.index, apiController.index);

// Show - Api
router.get("/api/:id", dataController.show, apiController.show);

// Delete - Api
router.delete("/api/:id", dataController.destroy, apiController.show);

// Update - Api
router.put("/api/:id", dataController.update, apiController.show);

// Create - Api
router.post("/api/", dataController.create, apiController.show);
 */

/**
 * Photos
 */

// Index
// router.get("/", dataController.index, viewController.index);
router.get("/", (req, res) => {
  Photograph.find({}, (error, images) => {
    if (err) {
      res.send(error);
    } else {
      res.render("portfolio/Index", { images });
    }
  });
});
// New
// router.get("/new", viewController.newView);
router.get("/new", (req, res) => {
  res.render("portfolio/New");
});

// Delete
// router.delete("/:id", dataController.destroy, viewController.redirectHome);
router.delete("/:id", (req, res) => {
  Photograph.findByIdAndRemove(req.params.id, (error, photo) => {
    if (error) res.send(error);
    res.redirect("/home");
  });
});
// Update
// router.put("/:id", dataController.update, viewController.redirectShow);
router.put("/:id", (req, res) => {
  Photograph.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (error, updatedPhoto) => {
      if (error) {
        res.send(error);
      } else {
        res.redirect(`/home/${updatedPhoto._id}`);
      }
    }
  );
});

// Create
// router.post("/", dataController.create, viewController.redirectHome);
router.post("/", (req, res) => {
  Photograph.create(req.body, (error, uploadedPhoto) => {
    if (error) {
      res.send(error);
    } else {
      res.redirect(`/home/${uploadedPhoto._id}`);
    }
  });
});
// Edit
// router.get("/:id/edit", dataController.show, viewController.edit);
router.get("/:id", (req, res) => {
  const { _id } = req.params;
  Photograph.findById(_id, (error, foundPhoto) => {
    res.render("portfolio/Edit", {
      photo: foundPhoto,
    });
  });
});
// Show - Route
// router.get("/:id", dataController.show, viewController.show);
router.get("/:id", (req, res) => {
  res.render("portfolio/Show");
});

module.exports = router;
