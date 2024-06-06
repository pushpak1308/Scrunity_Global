import "./App.css";
import Login from "../src/Components/Screens/Login"
import ForgotPassword from "../src/Components/Screens/ForgotPassword"
import ResetPassword from "../src/Components/Screens/ResetPassword"
import Register from "../src/Components/Screens/Register"
import Landing from "../src/Components/Screens/Landing"
import AddProject from "../src/Components/Screens/AddProject"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>} />
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
