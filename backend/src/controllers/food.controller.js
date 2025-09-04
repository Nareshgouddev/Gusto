const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuid } = require("uuid");

const createFood = async (req, res) => {
  try {
    const fileUploadResult = await storageService.uploadFile(
      req.file.buffer,
      uuid()
    );
    const foodItem = await foodModel.create({
      name: req.body.name,
      description: req.body.description,
      video: fileUploadResult.url,
      foodPartner: req.foodPartner._id,
    });

    res.status(201).json({
      message: "food created successfully",
      food: foodItem,
    });
  } catch (err) {
    res.status(200).send("ERROR" + err.message);
    console.error(err);
  }
};

const getFoodItems = async (req, res) => {
  const foodItems = await foodModel.find({});
  res.status(200).json({
    message: "Food items fetched successfully",
    foodItems,
  });
};

module.exports = { createFood, getFoodItems };
