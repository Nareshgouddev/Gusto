const mongoose = require("mongoose");

const foodpatnerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    contactName: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FoodpartnerModel = mongoose.model("Foodpartner", foodpatnerSchema);

module.exports = FoodpartnerModel;
