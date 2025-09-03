const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth.controller");

router.post("/user/register", authcontroller.registerUser);
router.post("/user/login", authcontroller.loginUser);
router.post("/user/logout", authcontroller.logoutUser);

//Food patners

router.post("/foodpatner/register", authcontroller.foodPatnerregister);
router.post("/foodpatner/login", authcontroller.loginFoodpatner);
router.post("/foodpatner/logout", authcontroller.logoutFoodpatner);

module.exports = router;
