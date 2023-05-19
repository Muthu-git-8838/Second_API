const mongoose = require("mongoose");
const validator = require("validator");

const TravellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
  },
  from: {
    type: String,
    required: true,
    min: 3,
  },
  to: {
    type: String,
    required: true,
    min: 3,
  },
  phone: {
    type: String,
    required: true,
    min: 10,
  },
  package: {
    type: String,
    required: true,
    min: 5,
  },
});

const Traveller = new mongoose.model("traveller", TravellerSchema);

module.exports = Traveller;
