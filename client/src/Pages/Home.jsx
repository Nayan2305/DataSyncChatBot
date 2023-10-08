import React from 'react'
import {Navbar} from "../Components/index.js"
import './Home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="card-container">
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h2>Total Users</h2>
            <p>12</p>
            <h2>Online Users</h2>
            <p>10</p>
          </div>
          <div className="card-back">
            <h2>Total Users</h2>
            <p>12</p>
            <h2>Online Users</h2>
            <p>10</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="add-button">Add User</button>
        <button className="add-button" onClick={navigate('/AddMachine')}>Add Machine</button>
      </div>
    </div>
    </>
  );
}

export default Home;

