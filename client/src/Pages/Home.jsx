import React from 'react'
import {Navbar} from "../Components/index.js"
import './Home.css'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className='Home-container'>
        <div className='stats-container'>
          <div className='content-box'>
            <div className="centered-content">
              <h3>Total Users: 12</h3>
              <h3>Online Users: 10</h3>
              <h3>Total Users: 12</h3>
              <h3>Online Users: 10</h3>
            </div>
          </div>          
        </div>
        
          <div className='content-box'>
            <div className='buttons'>
              <button className='button'>Add User</button>
              <button className='button' onClick={() => navigate('/AddMachine')}>Add Machine</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Home;

