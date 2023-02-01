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
router.use((req, res, next) => {
  console.log("session", req.session);
});
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
router.get("/", dataController.index, viewController.index);

// (req, res) => {
//   if (req.session.loggedIn) {
//     dataController.userIndex, viewController.userIndex;
//   } else {
//     dataController.index, viewController.index;
//   }
// });

// New
router.get("/new", viewController.newView);

// Delete
router.delete(
  "/admin/:id",
  dataController.destroy,
  viewController.redirectHome
);

// Update
router.put(
  "/:id",
  upload.single("image"),
  dataController.update,
  viewController.redirectShow
);

// Create
router.post("/", dataController.create, viewController.redirectHome);
// Edit
router.get("/:id/edit", dataController.show, viewController.edit);

// Show - Route
router.get("/:id", (req, res) => {
  if (req.session.loggedIn) {
    dataController.userShow, viewController.userShow;
  } else {
    dataController.show, viewController.show;
  }
});

module.exports = router;
