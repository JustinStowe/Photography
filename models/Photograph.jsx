/** @format */
const mongoose = require("mongoose");

const PhotographSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: false },
  image: { type: mongoose.Schema.Types.Buffer, required: true },
  contentType: { type: String, required: true },
});

const Photograph = mongoose.model("Photograph", PhotographSchema);

module.exports = Photograph;
