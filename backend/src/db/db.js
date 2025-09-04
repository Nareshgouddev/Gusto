const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("");
};

connectDB();

module.exports = connectDB;
