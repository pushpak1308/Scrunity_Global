import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddProject from './Components/AddProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element={<Login/>} />
        <Route exact path = "/register" element={<Register/>}/>
        <Route exact path = "/home" element={<Home/>}/>
        <Route exact path = "/add-project" element={<AddProject/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
