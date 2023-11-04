import React from "react";
import { Link } from "react-router-dom";
import image from "./image.jpeg";
import { useNavigate } from "react-router-dom";
import user from "./user.png";

// Your other imports and code here...


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ backgroundColor: "rgb(0, 82, 195)" }}
      >
        <div className="container py-2">
          <Link to="/Home">
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
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                <Link className="nav-link" to="/about">
                  About
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
              <button
              style={{ marginRight: "20px", marginLeft: "20px" , backgroundColor: "rgb(0, 82, 195)" , borderRadius:"25px" }}
                type="button"
                className="btn1 mx-1 btn-primary"
                onClick={() => navigate("/login")}
              >
                Login/Signup
              </button>
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
              <a className="user-text" href="/user"  style={{ marginLeft : "30px"}}>
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