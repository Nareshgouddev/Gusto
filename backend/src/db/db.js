const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ediganareshgoud406_db_user:dNcIHnpFkPEbVic9@cluster0.9vp1v0y.mongodb.net/Gusto"
  );
};

connectDB();

module.exports = connectDB;
