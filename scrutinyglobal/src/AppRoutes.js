import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import ResetPassword from "./Screens/Auth/ResetPassword";
import Register from "./Screens/Auth/Register";
import Landing from "../src/Screens/LandingPage/Landing";
import AddProject from "../src/Screens/AddProject";
import WaitingScreen from "./Screens/Auth/WaitingScreen";
import Dashboard from "./Screens/AdminDashboard/Index";
import Invoice from "./Screens/Invoice/Index";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/forgotPassword" element={<ForgotPassword />} />
      <Route exact path="/resetPassword" element={<ResetPassword />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/add-project" element={<AddProject />} />
      <Route exact path="/waiting-screen" element={<WaitingScreen />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/invoice" element={<Invoice />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
