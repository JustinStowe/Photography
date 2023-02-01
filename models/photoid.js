/** @format */
const mongoose = require("mongoose");

const ProjectIdSchema = new mongoose.Schema({
  name: { type: String, required: false },
  date: { type: String, required: false },
  images: [{ type: Buffer, required: true }],
  contentType: { type: String, required: true },
  projectId: { type: Number, required: true },
});

const ProjectId = mongoose.model("ProjectId", ProjectIdSchema);

module.exports = ProjectId;
