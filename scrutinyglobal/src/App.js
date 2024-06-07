import "./App.css";
import Login from "./Screens/Auth/Login";
import ForgotPassword from "./Screens/Auth/ForgotPassword";
import ResetPassword from "./Screens/Auth/ResetPassword";
import Register from "./Screens/Auth/Register";
import Landing from "../src/Screens/LandingPage/Landing";
import AddProject from "../src/Screens/AddProject";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Landing />} />
        <Route exact path="/add-project" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
