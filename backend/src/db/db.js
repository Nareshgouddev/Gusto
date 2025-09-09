const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(process.env.MANGODB_URL);
};

connectDB();

module.exports = connectDB;
