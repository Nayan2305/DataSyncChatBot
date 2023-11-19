import React from "react";
import { Navbar, Footer } from "../Components/index.js";
import "./Home.css"; // Import the CSS for the Home component
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAddMachineClick = () => {
    navigate("/ViewMachines");
  };
  const handleAddClick = () => {
    navigate("/AddUser");
  };

  return (
    <>
      <Navbar />
      <div className="center-container">
        <div className="newcontainer">
          {/* Container for Image */}
          <div className="image-container">
            <img src="machine.jpeg" alt="Your Image" />
          </div>
          <div className="text-container">
            <p>
              <h1 className="title1" > Revolutionize Your Experience </h1>
              <br/>
              <h2 className="title2">Unlock the Power of
              Automation!</h2>
              <br />
              <p>
                Subscribe now to effortlessly control your machines
              through our cutting-edge Telegram bot. Elevate your efficiency and
              embrace the future of seamless operations. Subscribe to simplify,
              subscribe to thrive!
              </p>
            </p>
          </div>
        </div>
      </div>

      <div className="home-container">
        <div className="grid-container">
          <div className="home-container-item">
            <div className="partition">
              <p>Click below to add a machine</p>
            </div>

            <button className="add-button" onClick={handleAddMachineClick}>
              View Machines
            </button>
          </div>
          <div className="home-container-item">
            <div className="partition">
              <p>Click below to add a user</p>
            </div>
            <button className="add-button" onClick={handleAddClick}>
              Add User
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card-container">
          <div className="card">
            <img src={"/QR.jpg"} className="rounded" alt="..." />
            <div className="card-body">
              <p className="card-text">
                <h5>Ready to chat with the bot ? </h5>
                <br />
                Scan the <strong>QR</strong> or{" "}
                <strong>click the button</strong> to access the bot
              </p>
              <a
                href="tg://resolve?domain=datasyncchatbot"
                className="btn btn-primary"
              >
                Access Bot
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
