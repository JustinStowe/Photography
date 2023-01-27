/** @format */
const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: false },
  image: { type: Buffer, required: true },
  contentType: { type: String, required: true },
});

const Photo = mongoose.model("Photo", PhotoSchema);

module.exports = Photo;
