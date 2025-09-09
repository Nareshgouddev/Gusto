require("dotenv").config();
const express = require("express");
const cookieparser = require("cookie-parser");
const authRouter = require("../src/routes/auth.router");
const foodRouter = require("../src/routes/food.router");
const foodPartnerRoutes = require("../src/routes/food-partner.router");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieparser());

app.use("/api/auth", authRouter);
app.use("/api/food", foodRouter);
app.use("/api/food-partner", foodPartnerRoutes);

module.exports = app;
