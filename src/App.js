import logo from './logo.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/Signup';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import * as mdb from 'mdb-ui-kit'; // lib
import Profile from './pages/Profile';
import Login from './pages/Login';
window.mdb = mdb;
function App() {

  
  return (
    <div style={{ position: "relative"}}>
      <BrowserRouter>
      <ToastContainer
      />

      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
