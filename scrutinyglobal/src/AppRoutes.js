import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import ResetPassword from "./Screens/Auth/ResetPassword";
import Landing from "./Screens/LandingPage/Landing";
import Register from "./Screens/Auth/Register";
import WaitingScreen from "./Screens/Auth/WaitingScreen";
import AddProject from "./Screens/AddProject";
import AddClient from "./Screens/SuperAdmin/Client/AddClient";
import Dashboard from "./Screens/SuperAdmin/Dashboard";
import Invoice from "./Screens/SuperAdmin/Invoice";

const WithoutTokenRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* without token */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/waiting-screen" element={<WaitingScreen />} />
        <Route exact path="/" element={<Landing />} />
        {/* with token */}
        <Route exact path="/add-project" element={<AddProject />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/invoice" element={<Invoice />} />
        <Route exact path="/add-client" element={<AddClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WithoutTokenRoutes;
