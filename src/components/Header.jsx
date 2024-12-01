import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/home-img/logo.png";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Brave Sparkids Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/courses" className={({ isActive }) => (isActive ? "active" : "")}>Courses</NavLink>
          </li>
          <li>
            <NavLink to="/franchise" className={({ isActive }) => (isActive ? "active" : "")}>Franchise</NavLink>
          </li>
          <li>
            <NavLink to="/careers" className={({ isActive }) => (isActive ? "active" : "")}>Careers</NavLink>
          </li>
          <li>
            <NavLink to="/insight" className={({ isActive }) => (isActive ? "active" : "")}>Insights</NavLink>
          </li>
          <li>
            <button className="contact-us">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
