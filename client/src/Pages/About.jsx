import React from 'react';
import Navbar from '../Components/Navbar'

const About = () => {
  return (
    <div>
        <Navbar/>
        <section className="about-section">
        <div className="container py-5">
          <div className="card">
            <div className="card-body">
              <h1>Who We Are?</h1>
              <p>
                This firm was established to fulfill customer needs in the current demanding and competitive market by supplying the right quality products at the right time. We work closely with customers to understand their needs and provide a total industrial solution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-us-section ">
        <div className="container py-5 ">
            
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced Team</li>
            <li>Design and Development</li>
            <li>Quality Policy</li>
            <li>Our Vision and Mission</li>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
