import React from 'react';
import { Navbar } from '../Components';
import './AboutUs.css'; // Import your CSS file
import clg_logo from'./clg_logo.jpg';
import completion_certificate from './completion_certificate.jpg'



const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="header-container">
        <img src={clg_logo} alt="College Logo" className="college-logo" />
        <div className="username-container">
          <span><h3>Vishwakarma Institute of Information Technology</h3></span>
        </div>
      </div>

      <div className="side-by-side-containers">
        <div className="container1">
          <h3>Group Member's details</h3><br>
          </br>
          <h5>Name:Tanmay Deshpande   Prn:22010612</h5>
          <br>
          </br>
          <h5>Name:Nayan Thombre   Prn:22010879</h5>
          <br>
          </br>
          <h5>Name:Suyog Walunj   Prn:22010848</h5>
          <br>
          </br>
          <h5>Name:Aditya Wandekhar   Prn:22010115</h5>
          <br></br>
          <br></br>
          <h3>Under mentorship of:</h3>
          <br></br>
          <h5> Prof. Ratnmala Bhimanpallewar </h5>
          <br></br>
          <h5>Industy guide Mr.Sunil Chavan</h5>
        </div>
        <div className="container2">
        <img src={completion_certificate } />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
