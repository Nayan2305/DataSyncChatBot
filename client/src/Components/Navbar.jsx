import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";
import image from './image.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src={image} alt="Logo" width="100" height="50" />
        </Link>
      </div>
      <div className="navbar-middle">
        <ul className="navbar-menu">
          <li><Link >Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
      <div className="navbar-right">
        <Link to="/login">
          <button className="login-button">Login / Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;