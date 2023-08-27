import React from "react";
import "./Navbar.css";
import image from './image.jpeg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={image} alt="IMAGE" width="100" height="50"/>
        {/* <div className="logo">Sunshine Powertronics</div> */}
      </div>
      <div className="navbar-middle">
        <ul className="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="navbar-right">
        <button to='/Login' className="login-button">Login / Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
