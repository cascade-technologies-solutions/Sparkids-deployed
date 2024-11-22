import React from "react";
import logo from "../Assets/logo.png"; // Make sure the logo image is available
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Brave Sparkids Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
          <li>Franchise</li>
          <li>Careers</li>
          <li>Insights</li>
          <li>
            <button className="contact-us">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
