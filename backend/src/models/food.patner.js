const mongoose = require("mongoose");

const foodpatnerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
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

const FoodpartnerModel = mongoose.model("Foodpatner", foodpatnerSchema);

module.exports = FoodpartnerModel;
