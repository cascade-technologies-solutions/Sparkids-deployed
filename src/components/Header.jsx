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
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
          </li>
          <li><NavLink to="/franchise" activeClassName="active">Franchise</NavLink></li>
          <li><NavLink to="/careers" activeClassName="active">Careers</NavLink></li>
          <li><NavLink to="/insight" activeClassName="active">Insights</NavLink></li>
          <li>
            <button className="contact-us">Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
