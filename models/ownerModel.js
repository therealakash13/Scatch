const mongoose = require("mongoose");

const ownerSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  contact: Number,
  profilePicture: { data: Buffer, contentType: String },
  products: Array,
  gstIn: Array,
});

module.exports = mongoose.model("user", ownerSchema);
