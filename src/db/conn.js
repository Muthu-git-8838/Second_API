const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch(() => {
    console.log("OOPS... Failed to connect");
  });
