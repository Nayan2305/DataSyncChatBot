import React, { useEffect, useState } from "react";
import "./Login.css"; // Import your CSS file
import { useNavigate, useLocation } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { Navbar } from "../Components";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [username3, setUsername3] = useState("");
  const [Phone, setPhone] = useState("");
  const [machineId, setmachineId] = useState("");

  // useEffect(() => {
  //   const auth = localStorage.getItem("user");
  //   if (auth) {
      
  //   }
  // }, []);

  const from = location.state?.from?.pathname || "/";

    const generatePassword = () => {
      // Password generation logic (you can customize this)
      const length = 6;
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
  
      return password;
    };
  
    // const handleButtonClick = () => {
     
    //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = generatePassword();
    alert(`Your random password is: ${password}`);

    console.log(password);
    try {
      const usernamesArray = [username1, username2, username3].filter(Boolean);

      const data = {
        usernames: usernamesArray,
        mobile_number: Phone,
        motor_id: machineId,
        password: password,
      };

      const response = await axios.post(
        "http://localhost:4000/api/create_user_profile",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
        console.log(response);
      alert("Password Created Successfully: " + password);
      console.log("Password Created Successfully:", password);

      navigate("/");

    } catch (err) {
      alert("Phone Number / Motor Id Already Exists");
      console.error("Error creating user profile:", err);
      // Handle any errors here
    }
    navigate("/");
  };

  return (
    <>
    <Navbar/>

    <div className="login-container">
      <div className="login-box">
        <h2 className="instagram-logo">Add User</h2>
        <form>
          <input
          required
            className="input-field"
            type="text"
            placeholder="Telegram Username 1"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            placeholder="Telegram Username 2"
            value={username2}
            onChange={(e) => setUsername2(e.target.value)}
          />
          
          <input
            className="input-field"
            type="text"
            placeholder="Telegram Username 3"
            value={username3}
            onChange={(e) => setUsername3(e.target.value)}
          />
          <PhoneInput
            country={"in"}
            value={Phone}
            onChange={setPhone}
            autoComplete="false"
            required
            inputStyle={{
              width: "300px",
              height: "45px",
              fontSize: "16px",
            }}
          />
          <input
            className="input-field"
            type="text"
            required
            placeholder="Motor Id"
            value={machineId}
            onChange={(e) => setmachineId(e.target.value)}
          />

          <button className="login-button" onClick={handleSubmit}>
            Add User
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddUser;
