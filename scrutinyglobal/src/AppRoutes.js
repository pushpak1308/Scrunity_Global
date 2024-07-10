import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import ResetPassword from "./Screens/Auth/ResetPassword";
import Landing from "./Screens/LandingPage/Landing";
import Register from "./Screens/Auth/Register";
import WaitingScreen from "./Screens/Auth/WaitingScreen";
import AddClient from "./Screens/SuperAdmin/Client/AddClient";
import Dashboard from "./Screens/SuperAdmin/Dashboard";
import Invoice from "./Screens/SuperAdmin/Invoice";
import Clients from "./Screens/SuperAdmin/Client/Clients";
import ClientDetail from "./Screens/SuperAdmin/Client/ClientDetail";
import AddProject from "./Screens/SuperAdmin/Project/AddProject";
import Projects from "./Screens/SuperAdmin/Project/Projects";
import ProjectDetail from "./Screens/SuperAdmin/Project/ProjectDetails";

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
        <Route exact path="/clients" element={<Clients />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/invoice" element={<Invoice />} />
        <Route exact path="/add-client" element={<AddClient />} />
        <Route exact path="/client/:id" element={<ClientDetail />} />
        <Route exact path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default WithoutTokenRoutes;
