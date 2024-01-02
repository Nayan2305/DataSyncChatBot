import React, { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { Navbar } from "../Components";
import "react-phone-input-2/lib/style.css";
import { Axios } from "../config/index.js";

const Editpage = () => {
  const navigate = useNavigate();

  const mobileNumber = localStorage.getItem("mobileNumber");
  const names = localStorage.getItem("names");
  const motor = localStorage.getItem("motorid");

  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [username3, setUsername3] = useState("");
  const [machineId, setMachineId] = useState("");

  useEffect(() => {
    setUsername1(names?.split(',')[0] || '');
    setUsername2(names?.split(',')[1] || '');
    setUsername3(names?.split(',')[2] || '');
    setMachineId(motor || '');
  }, [names, motor]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const password = generatePassword();
    alert(`Your random password is: ${password}`);

    const formattedMobileNumber = `91${mobileNumber}`;

    try {
      const response = await Axios.delete(`delete_users/${formattedMobileNumber}`);

      if (response.status === 200) {
      } else {
        console.error("Error deleting. Server responded with status:", response.status);
      }
    } catch (error) {
      console.error("Error deleting :", error.message);
    }
    console.log("mobile Number :", formattedMobileNumber);

    try {
      const usernamesArray = [username1, username2, username3].filter(Boolean);

      const data = {
        usernames: usernamesArray,
        mobile_number: formattedMobileNumber,
        motor_id: machineId,
        password: password,
      };

      await Axios.post(
        "create_user_profile",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      alert("Password Created Successfully: " + password);
      console.log("Password Created Successfully:", password);

      navigate("/");
    } catch (err) {
      console.error("Error creating user profile:", err);
    }
    navigate('/viewMachines');
  };

  return (
    <>
      <Navbar />

      <div className="login-container">
        <div className="login-box">
          <h2 className="instagram-logo">Edit User</h2>
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
            <input
              className="input-field"
              type="text"
              required
              placeholder="Motor Id"
              value={machineId}
              onChange={(e) => setMachineId(e.target.value)}
            />

            <button className="login-button" onClick={handleSubmit}>
              Edit User
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Editpage;
