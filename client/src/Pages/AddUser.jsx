import React, { useState } from "react";
import "./AddUser.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Navbar } from "../Components";

const AddUser = () => {
  const navigate = useNavigate();
  
  const [Phone1,setPhone1] = useState("");
  const [user1, setuser1] = useState("");
  const [Phone2,setPhone2] = useState("");
  const [user2, setuser2] = useState("");

  const handlesubmit = () => {
    // Do something to login the user.
  };

  

  return (
    <>
    <Navbar/>
    <div className="login-container">
      <div className="login-box">
        <h2 className="instagram-logo">Add extra users</h2>
        <form>
        <PhoneInput
        country={'in'}
        value={Phone1}
        onChange={setPhone1}
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
            
            placeholder="Telegram Userid of 1st user"
            value={user1}
            onChange={(e) => setuser1(e.target.value)}
          />
          <PhoneInput
        country={'in'}
        value={Phone2}
        onChange={setPhone2}
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
            
            placeholder="Telegram Userid of 2nd user"
            value={user2}
            onChange={(e) => setuser2(e.target.value)}
          />
          <button className="login-button" onClick={handlesubmit}>
            Add Users
          </button>
        </form>
        {/* <div className="separator">
          <span className="or-text">OR</span>
        </div>
        <button className="signup-button" onClick={handlesubmit}>
           */}
        {/* </button> */}
      </div>

    </div>
    </>
  );
};

export default  AddUser;