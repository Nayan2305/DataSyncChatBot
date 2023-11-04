// Home.js

import React from 'react';
import { Navbar, Footer } from "../Components/index.js";
import './Home.css'; // Import the CSS for the Home component
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAddMachineClick = () => {
    navigate('/AddMachine');
  };
  const handleAddUserClick = () => {
    navigate('/AddUser');
  };

  return (
    <>
      <Navbar />
      <div className="home-container"> 
        <div className="grid-container">
          <div className="home-container-item">
            <div className="partition">
              <img src="your_image_url1" alt="Image 1" />
              <p>Click below to add a machine</p>
            </div>
            
            <button className="add-button" onClick={handleAddMachineClick}>Add Machine</button>
          </div>
          <div className="home-container-item">
            
            <div className="partition">
              <img src="your_image_url4" alt="Image 4" />
              <p>Clike below to add a user</p>
            </div>
            <button className="add-button" onClick={handleAddUserClick}>Add User</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;