/** @format */
const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: String, required: false },
  image: { type: Buffer, required: true },
  contentType: { type: String, required: true },
  projectId: { type: Number, required: false },
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
