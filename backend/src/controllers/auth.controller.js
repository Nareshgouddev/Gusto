const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const FoodpartnerModel = require("../models/food.patner");

const registerUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const isuserexist = await userModel.findOne({ email });
  if (isuserexist) {
    res.status(400).json({ message: "User already exist" });
  }
  try {
    const hashpassword = await bcrypt.hash(password, 10);
    const User = await userModel.create({
      fullName,
      email,
      password: hashpassword,
    });
    const token = jwt.sign({ id: User._id }, process.env.JWT_KEY);
    res.cookie("token", token);
    res.status(200).json({ message: "User created sucessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const User = await bcrypt.compare(password, user.password);
  if (!User) {
    res.status(400).json({ message: "Ivalid email or password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_KEY);
  res.cookie("token", token);
  res.status(200).json({ message: "Login succesfully" });
};

const logoutUser = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout Succesfully" });
};

const foodPartnerregister = async (req, res) => {
  const { fullName, email, password, contactName, Phone, address } = req.body;
  const isuserexist = await FoodpartnerModel.findOne({ email });
  if (isuserexist) {
    return res.status(400).json({ message: "Food patner already exist" });
  }
  try {
    const hashpassword = await bcrypt.hash(password, 10);
    const Foodpartner = await FoodpartnerModel.create({
      fullName,
      email,
      password: hashpassword,
      contactName,
      Phone,
      address,
    });
    const token = jwt.sign({ id: Foodpartner._id }, process.env.JWT_KEY);
    res.cookie("token", token);
    res.status(200).json({ message: "Food Patner created sucessfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginFoodpartner = async (req, res) => {
  const { email, password } = req.body;

  const Foodpatner = await FoodpartnerModel.findOne({ email });
  if (!Foodpatner) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const User = await bcrypt.compare(password, Foodpatner.password);
  if (!User) {
    res.status().json({ message: "Ivalid email or password" });
  }
  const token = jwt.sign({ id: Foodpatner._id }, process.env.JWT_KEY);
  res.cookie("token", token);
  res.status(200).json({ message: "Food patner Login succesfully" });
};

const logoutFoodpartner = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout Succesfully" });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  foodPartnerregister,
  loginFoodpartner,
  logoutFoodpartner,
};
