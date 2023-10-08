import React, { useState } from "react";
import "./Login.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Email, setEmail] = useState("");

  const handleLogin = () => {
    // Do something to login the user.
  };

  const handleSignup = () => {
    // Do something to signup the user.
    navigate("/Login")
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="instagram-logo">Sign Up</h2>
        <form>
          <input
            className="input-field"
            type="text"
            placeholder="Enter Your Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
            <input
            className="input-field"
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Sign Up
          </button>
        </form>
        <div className="separator">
          <span className="or-text">OR</span>
        </div>
        <button className="signup-button" onClick={handleSignup}>
          <div className="button-text">
            Already a user? <br /> Click Here to Login
          </div>
        </button>
      </div>
    </div>
  );
};

export default Register;
