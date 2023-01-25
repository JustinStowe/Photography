/** @format */
const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: false },
  image: { type: mongoose.Schema.Types.Buffer, required: true },
});

const Photograph = mongoose.model("Photograph", PhotoSchema);

module.exports = Photo;
