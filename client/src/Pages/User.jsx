import React, { useState, useEffect } from "react";
// import axios from "axios";
import {Axios} from "../config/index.js";
import "./User.css";
import { useNavigate } from "react-router-dom";
import { Navbar, Footer } from "../Components";

const User = () => {
  const auth = localStorage.getItem("user");
  const [mobileNumber, setMobileNumber] = useState(""); 
  const [username,setusername] = useState([]);
  const [motorid , setmotorid] = useState([]);
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [filteredData, setFilteredData] = useState([]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const checkstatus = async(e) =>{
    // e.preventDefault();

    try {
      const response = await Axios.get(
        `user_data/${auth}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
    } catch (err) {
      console.log(err);
    }
  }

  const handleMachineToggle = async(motor_id, motorStatus) => {
    // e.preventDefault();
    checkstatus();

    try {
       const val = motorStatus==1 ? "0" :"1";
        const data = {
            motor_status : val
        }
      const response = await Axios.put(
        `change_motor_status/${motor_id}`,
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



  const returnHome = () => {
    navigate("/");
  };

  const getData = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await Axios.get(
        `motor/user/${auth}`
      );

      const userMobileNumber = response.data.mobile_number; // Adjust based on your API response structure
      setMobileNumber(userMobileNumber);
      setusername(response.data.usernames.join(' , '));
      setmotorid(response.data.motor_id);

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

        <table className="user-profile-table">
          <tbody>
            <tr>
              <td className="entry-label">Phone No :</td>
              <td>{mobileNumber.substring(2)}</td>
            </tr>

            <tr>
              <td className="entry-label">Username : </td>
              <td>{username}</td>
            </tr>
            <tr>
              <td className="entry-label">Motor id :</td>
              <td>{motorid}</td>
            </tr>
          </tbody>
        </table>
        {/* Render your filtered data */}
        <table className="table  table-bordered  table-striped table-responsive-md custom-table">
  <thead>
    <tr className="col-title" >
    <th scope="col">Vry</th>
    <th scope="col">Vyb</th>
    <th scope="col">Vbr</th>
    <th scope="col">Ir</th>
    <th scope="col">Iy</th>
    <th scope="col">Ib</th>
      <th scope="col">Fault Status</th>
      <th scope="col">Motor Status</th>
      <th scope="col">Last Updated</th>
      <th scope="col">Turn on/off</th>
    </tr>
  </thead>
  <tbody>
    {filteredData.map((data) => (
      <tr key={data.id}>

        <td>{data.Vry}</td>
        <td>{data.Vyb}</td>
        <td>{data.Vbr}</td>
        <td>{data.Ir}</td>
        <td>{data.Iy}</td>
        <td>{data.Ib}</td>

        <td>{data.fault_status ? "Faulty" : "Not Faulty"}</td>
        <td>{data.motor_status ? "Running" : "Stopped"}</td>
        <td>{new Date(data.updatedAt).toLocaleString()}</td>
        <td>
          <button onClick={() => handleMachineToggle(data.motor_id, data.motor_status)}>
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
