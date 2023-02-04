/** @format */

const express = require("express");
const router = express.Router();
const dataController = require("./dataController");
const viewController = require("./viewController");
const apiController = require("./apiController");
const upload = require("../../middleware/uploadEngine");

router.use((req, res, next) => {
  next();
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

// New
router.get("/new", viewController.newView);

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

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
router.get("/:id", dataController.show, viewController.show);

module.exports = router;
