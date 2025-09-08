import { useState } from "react";
import Navbar from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "./components/LandingPage";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.status);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
