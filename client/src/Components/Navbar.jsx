import React from "react";
import { Link } from "react-router-dom";
import image from "./image.jpeg";
import { NavLink, useNavigate } from "react-router-dom";
// import './navbar.css';
import user from "./user.png";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: "100%" }}
      >
        <div className="container py-2">
          <Link to="/">
            <img src={image} alt="Logo" width="100" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li
                className="nav-item"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Link className="nav-link" to="/Contact">
                  Contact Us
                </Link>
              </li>
              <li>
                {auth ? (
                  <NavLink
                    onClick={logout}
                    to="/"
                    className="btn btn-outline-dark m-2 text-white"
                    style={{ backgroundColor: "blue", color: "white" }}
                  >
                    <i className="fa fa-sign-out-alt mr-1 text-white"></i>{" "}
                    Logout
                  </NavLink>
                ) : (
                  <button
                    style={{
                      marginRight: "20px",
                      marginLeft: "20px",
                      color: "white",
                      backgroundColor: "blue",
                      borderRadius: "25px",
                      transition: "background-color 0.3s", // Add a smooth transition effect
                    }}
                    type="button"
                    className="btn1 mx-1 btn-primary"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </li>
              <li>
                <Link to="/User" className="mr-2">
                  {/* <img
                  src={user}
                  className="user-icon"
                  alt="User"
                  style={{ width: "50px", height: "50px", marginLeft: "50px" }}
                /> */}
                </Link>
                <a
                  className="user-text"
                  href="/user"
                  style={{ marginLeft: "30px" }}
                >
                  My Account
                </a>
              </li>
            </ul>

            {/* <div className="ml-auto d-flex align-items-center">
            
             
            </div> */}
          </div>{" "}
          {/* End of collapsible content */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
