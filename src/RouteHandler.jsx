import React from "react";
import DevDashboard from "./pages/developer/dashboard/DevDashboard";
import Endpoints from "./pages/developer/endpoints/Endpoints";
import ApiKey from "./pages/developer/apiKey/ApiKey";
import Quest from "./pages/user/quests/Quest";
import QuestCategories from "./pages/user/categories/QuestCategories";
import Home from "./pages/homepage/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/developer/auth/Signup";
import Login from "./pages/developer/auth/Login";

export default function RouteHandler() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* User Route */}
      <Route path="/user/quest/:categoryId/:categoryName" element={<Quest />} />
      <Route path="/user/categories-quest" element={<QuestCategories />} />

      {/* Developer Route */}
      <Route path="/auth/developer/login" element={<Login />} />
      <Route path="/auth/developer/signup" element={<Signup />} />
      <Route path="/dev/dashboard" element={<DevDashboard />} />
      <Route path="/dev/endpoints" element={<Endpoints />} />
      <Route path="/dev/api-key" element={<ApiKey />} />
    </Routes>
  );
}
