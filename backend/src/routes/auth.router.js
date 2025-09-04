const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth.controller");

router.post("/user/register", authcontroller.registerUser);
router.post("/user/login", authcontroller.loginUser);
router.post("/user/logout", authcontroller.logoutUser);

//Food patners

router.post("/foodpartner/register", authcontroller.foodPartnerregister);
router.post("/foodpartner/login", authcontroller.loginFoodpartner);
router.post("/foodpartner/logout", authcontroller.logoutFoodpartner);

module.exports = router;
