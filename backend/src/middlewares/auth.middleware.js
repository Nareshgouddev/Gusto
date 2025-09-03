const FoodpartnerModel = require("../models/food.patner");
const jwt = require("jsonwebtoken");

const authFoodPartnerMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Please Login",
    });
  }
  try {
    const decode = jwt.verify(token, process.env.JWT_KEY);
    const foodPartner = await FoodpartnerModel.findById(decode.id);
    req.foodPartner = foodPartner;
    next();
  } catch (err) {
    res.status(401).json({
      message: "Inavalid token",
    });
  }
};

module.exports = { authFoodPartnerMiddleware };
