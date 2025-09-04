const FoodpartnerModel = require("../models/food.patner");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const authFoodPartnerMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "Please login first" });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const foodPartner = await FoodpartnerModel.findById(decoded.id);

    if (!foodPartner) {
      return res.status(401).json({ message: "Food partner not found" });
    }
    req.foodPartner = foodPartner;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "Invalid or expired token", error: err.message });
  }
};

const authUserMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);

    const user = await userModel.findById(decoded.id);

    req.user = user;

    next();
  } catch (err) {
    return res.status(401).send("ERROR" + err.message);
  }
};

module.exports = { authFoodPartnerMiddleware, authUserMiddleware };
