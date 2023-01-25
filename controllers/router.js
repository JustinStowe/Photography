/** @format */

const express = require("express");
const router = express.Router();

// Data controller
const dataController = require("./dataController");
const viewController = require("./viewController");
const apiController = require("./apiController");

router.use((req, res, next) => {
  console.log("session", req.session);

  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

/**
 * Photo - Api routes
 */

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

/**
 * Photos
 */

// Index
router.get("/", dataController.index, viewController.index);

// New
router.get("/new", viewController.newView);

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

// Update
router.put("/:id", dataController.update, viewController.redirectShow);

// Create
router.post("/", dataController.create, viewController.redirectHome);

// Edit
router.get("/:id/edit", dataController.show, viewController.edit);
// Show - Route
router.get("/:id", dataController.show, viewController.show);

module.exports = router;
