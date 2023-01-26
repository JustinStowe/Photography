/** @format */
const express = require("express");
const sharp = require("sharp");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

// Index
router.get("/home", (req, res) => {
  Photo.find({}, (err, images) => {
    if (err) res.send(err);
    res.render("portfolio/index", { images });
  });
});

// New
router.get("/home/new", (req, res) => {
  res.render("portfolio/new");
});

// Delete
router.delete("/:id", dataController.destroy, viewController.redirectHome);

// Update
router.put("/:id", dataController.update, viewController.redirectShow);

// Create
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const buffer = await sharp(req.file.path)
      .resize({ width: 250, height: 250 })
      .png()
      .toBuffer();

    const photo = new Photo({
      name: req.body.name,
      image: buffer,
      contentType: "image/png",
    });

    await photo.save();
    res.send("Successfully uploaded image!");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Edit
router.get("/:id/edit", async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    if (!photo) {
      return res.status(404).send("Photo not found");
    }
    res.set("Content-Type", photo.contentType);
    res.send(picture.image);
    res.render("edit", { photo });
  } catch (err) {
    res.status(400).send(error);
  }
});
// Show - Route
router.get("/:id", dataController.show, viewController.show);
