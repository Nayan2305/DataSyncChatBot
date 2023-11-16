import React, {useEffect, useState } from "react";
import "./Login.css"; // Import your CSS file
import { useNavigate,useLocation  } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [Phone,setPhone] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);
  const from = location.state?.from?.pathname || "/";
  

  const handleLogin = async(e) => {
    // Do something to login the user.
    // console.log(e)
    e.preventDefault();

    try {
      const data = {
        mobile_number: Phone, // Assuming Phone is not null
        password: password, // Assuming password is not null
      };
      const response = await axios.post(
        "http://localhost:4000/api/login/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 400) {
        alert("User not Found");
      } else if (response.status === 401) {
        alert("Invalid Credentials");
      } else {
        const accessToken = response?.data?.token;
        localStorage.setItem("token", JSON.stringify(accessToken));
        localStorage.setItem("user", JSON.stringify(response?.data?.user));

        // setauth({ accessToken });
        // setrefreshToken(response?.data?.tokens?.refresh);
        navigate(from, { replace: true });
      }
      // console.log(response.data.token);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSignup = () => {
    // Do something to signup the user.
    navigate("/Register");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="instagram-logo">Login</h2>
        <form>
        <PhoneInput
        country={'in'}
        value={Phone}
        onChange={setPhone}
        autoComplete="false"
        inputStyle={{
          // Define your desired CSS styles for the input field
          width: '300px', // Set the width as per your preference
          height: '45px', // Set the height as per your preference
          fontSize: '16px', // Set the font size as per your preference
          // Add any other CSS properties you want to customize
        }}
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
        {/* <div className="separator">
          <span className="or-text">OR</span>
        </div> */}
        {/* <button className="signup-button" onClick={handleSignup}>
          <div className="button-text">
            New Here? <br /> Click Here to Register
          </div>
        </button> */}
      </div>

    </div>
    
  );
};

export default Login;