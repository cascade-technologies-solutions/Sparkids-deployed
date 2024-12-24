import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/home-img/logo.png";
import "../styles/header.css";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/">
          <img src={logo} alt="Brave Sparkids Logo" />
        </NavLink>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav ${isNavOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/courses" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>Courses</NavLink>
          </li>
          <li>
            <NavLink to="/franchise" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>Franchise</NavLink>
          </li>
          <li>
            <NavLink to="/careers" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>Careers</NavLink>
          </li>
          <li>
            <NavLink to="/insight" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>Insights</NavLink>
          </li>
          <li>
          <NavLink to="/contact" onClick={closeNav} className={({ isActive }) => (isActive ? "active" : "")}>
            <button className="contact-us" onClick={closeNav}>Contact Us</button>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`overlay ${isNavOpen ? "active" : ""}`} onClick={closeNav}></div>
    </header>
  );
}

export default Header;
