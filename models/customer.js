/** @format */
const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  email: { type: String, required: true },
  projectId: { type: Number, required: false },
});

const Customer = mongoose.model("Photo", CustomerSchema);

module.exports = Customer;
