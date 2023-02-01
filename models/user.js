/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true }, // Unique index
  password: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  email: { type: String, required: true },
  projectId: [{ type: Number, required: false }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
