import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homeup.css";
import Logo from "./Logo";
const Homeup = ({ homepagestatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div>
      <Logo/>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left">
            
          </div>
          <div className="navbar-right">
            <button className="navbar-button" onClick={() => handleButtonClick("/login")}>
              Login
            </button>
            <button className="navbar-button" onClick={() => handleButtonClick("/signup")}>
              Sign Up
            </button>
          </div>
          <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
            <div className="menu-icon-line"></div>
          </div>
        </div>
      </nav>
      <div className={`navbar-menu ${isOpen ? "open" : ""}`}>
        <button className="navbar-button" onClick={() => handleButtonClick("/login")}>
          Login
        </button>
        <button className="navbar-button" onClick={() => handleButtonClick("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Homeup;
