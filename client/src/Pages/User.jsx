import React, { useState, useEffect } from "react";
import axios from "axios";
import "./User.css";
import userProfileImage from "./user.png";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../Components";

const User = () => {
  const auth = localStorage.getItem("user");
  console.log(auth);

  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "John Doe",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    address: "123 Main St, Cityville",
    bot_id: "1234",
    bot_token: "ifi48f9wdf8",
  });

  const [filteredData, setFilteredData] = useState([]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const checkstatus = async(e) =>{
    // e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:4000/api/user_data/${auth}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data.motor_status);
    } catch (err) {
      console.log(err);
    }
  }

  const handleMachineToggle = async(e) => {
    // e.preventDefault();
    checkstatus();

    try {
        const data = {
            motor_status : "1",
        }
      const response = await axios.put(
        ` http://localhost:4000/api/change_motor_status/${auth}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

};

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can save the edited data to your backend or perform any other required actions here.
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const returnHome = () => {
    navigate("/Home");
  };

  const getData = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await axios.get(
        `http://localhost:4000/api/motor/user/${auth}`
      );

      console.log("data:", response.data);

      if (Array.isArray(response.data)) {
        setFilteredData(response.data);
      } else if (typeof response.data === "object") {
        // If the response is an object, convert it to an array
        setFilteredData([response.data]);
      } else {
        console.error("Unexpected data format:", response.data);
        // Handle the error appropriately (e.g., show an error message)
      }
    } catch (err) {
      console.log(" error:", err);
      // Handle errors appropriately (e.g., show an error message)
    }
  };

  useEffect(() => {
    getData();
  }, []); // Fetch data when the component mounts
  getData();
  return (
    <>
      <Navbar />
      <div className="user-profile">
        {/* ... (rest of your JSX) */}

        {/* <button className="btn btn-primary fetch-button" onClick={getData}>
          Fetch Data
        </button> */}
        <table className="user-profile-table">
          <tbody>
            <tr>
              <td className="entry-label">Phone No.</td>
              <td>123456789</td>
            </tr>

            <tr>
              <td className="entry-label">Bot-name</td>
              <td>DataBot</td>
            </tr>
          </tbody>
        </table>
        {/* Render your filtered data */}
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.mobile_number}</td>
                <td>{data.motor_id}</td>
                <td>{data.fault_status ? "Faulty" : "Not Faulty"}</td>
                <td>{data.motor_status ? "Running" : "Stopped"}</td>
                <td>{new Date(data.updatedAt).toLocaleString()}</td>
                <td>
                  <button onClick={() => handleMachineToggle(data.machineId)}>
                    {data.motor_status ? "Turn Off" : "Turn On"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default User;
