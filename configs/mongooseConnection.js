const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Scatch")
  .then(() => {
    console.log("Connection to Database Successful...");
  })
  .catch((error) => {
    console.log("Error connecting to Database... Error: ", error);
  });

  module.exports = mongoose.connection;