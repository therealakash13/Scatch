const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullName: String,
  email: String,
  password: String,
  contact: Number,
  isAdmin: { type: Boolean, default: false },
  profilePicture: { data: Buffer, contentType: String },
  orders: Array,
  cart: Array,
});

module.exports = mongoose.model("user", userSchema);
