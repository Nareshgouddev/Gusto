const express = require("express");
const cookieparser = require("cookie-parser");
const authRouter = require("../src/routes/auth.router");
const foodRouter = require("../src/routes/food.router");

const app = express();

app.use(express.json());
app.use(cookieparser());
require("dotenv").config();

app.use("/api/auth", authRouter);
app.use("/api/food", foodRouter);

module.exports = app;
