/** @format */

const express = require("express");
const router = express.Router();
// Data and View controller
const dataController = require("./dataController");
const viewController = require("./viewController");
const apiController = require("./apiController");

//Middleware
const upload = require("../../middleware/uploadEngine");
const logStatus = require("../../middleware/logStatus");
const checkAuth = require("../../middleware/checkAuth");

// router.use((req, res, next) => {
//   console.log("session", req.session);

//   if (req.session.loggedIn) {
//     next();
//   } else {
//     res.redirect("/user/login");
//   }
// });

/*
 * Photo - Api routes
 */

// Index - Api
router.get("/api", dataController.index, apiController.index);

// Show - Api
router.get("/api/:id", dataController.show, apiController.show);

/*
 * Photo routes
    (INDUCES)
 */
// Index
router.get("/admin", logStatus, dataController.index, viewController.index);

// New
router.get("/admin/new", checkAuth, viewController.newView);

// Delete
router.delete(
  "/admin/:id",
  checkAuth,
  dataController.destroy,
  viewController.redirectHome
);

// Update
router.put(
  "/admin/:id",
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
router.get("admin/:id", logStatus, dataController.show, viewController.show);

module.exports = router;
