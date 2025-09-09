const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 30,
  },
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  foodPartner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Foodpatner",
  },
  likeCount: {
    type: Number,
    default: 0,
  },
  savesCount: {
    type: Number,
    default: 0,
  },
});

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;
