import React, { useState } from "react";
import "./Login.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Do something to login the user.
  };

  const handleSignup = () => {
    // Do something to signup the user.
    navigate("/Register");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="instagram-logo">Login</h1>
        <form>
          <input
            className="input-field"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="input-field"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Log in
          </button>
        </form>
        <div className="separator">
          <span className="or-text">OR</span>
        </div>
        <button className="signup-button" onClick={handleSignup}>
          <div className="button-text">
            New Here? <br /> Click Here to Register
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
