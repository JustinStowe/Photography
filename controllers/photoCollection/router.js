/** @format */

const express = require("express");
const router = express.Router();
// Data and View controller
const dataController = require("./dataController");
const viewController = require("./viewController");
const apiController = require("./apiController");

//Middleware
const upload = require("../../middleware/uploadEngine");
const logStatus = require("../../middleware/authentication");
const checkAuth = require("../../middleware/authentication");

// router.use((req, res, next) => {
//   console.log("session", req.session);

//   if (req.session.loggedIn) {
//     next();
//   } else {
//     res.redirect("/user/login");
//   }
// });

/**
 * Photo - Api routes
 */

// Index - Api
router.get("/api", dataController.index, apiController.index);

// Show - Api
router.get("/api/:id", dataController.show, apiController.show);

// // Delete - Api
// router.delete("/api/:id", dataController.destroy, apiController.show);

// // Update - Api
// router.put("/api/:id", dataController.update, apiController.show);

// // Create - Api
// router.post("/api/", dataController.create, apiController.show);

/**
 * Photos
 */

// Index
router.get("/", logStatus, dataController.index, viewController.index);

// New
router.get("/new", checkAuth, viewController.newView);

// Delete
router.delete(
  "/:id",
  checkAuth,
  dataController.destroy,
  viewController.redirectHome
);

// Update
router.put(
  "/:id",
  checkAuth,
  upload.single("image"),
  dataController.update,
  viewController.redirectShow
);

// Create
router.post("/", checkAuth, dataController.create, viewController.redirectHome);
// Edit
router.get("/:id/edit", checkAuth, dataController.show, viewController.edit);

// Show - Route
router.get("/:id", logStatus, dataController.show, viewController.show);

module.exports = router;
