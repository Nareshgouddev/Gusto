import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import FoodPartnerRegister from "../pages/FoodPartnerRegister";
import FoodPartnerLogin from "../pages/FoodPartnerLogin";
import Createfood from "../pages/food-partner/createfood";
import Home from "../pages/general/Home";
import Profile from "../pages/food-partner/profile";
import Saved from "../pages/general/Saved";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/user/register" element={<UserRegister />} />
      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
      <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
      <Route path="/" element={<Home />} />
      <Route path="/create-food" element={<Createfood />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/foodpartner/:id" element={<Profile />} />
      <Route path="/saved" element={<Saved />} />
    </Routes>
  );
};

export default AppRoutes;
