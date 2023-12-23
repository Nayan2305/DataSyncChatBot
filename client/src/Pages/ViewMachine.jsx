import React, { useState, useEffect } from "react";
import "./ViewMachine.css";
// import axios from "axios";
import {Axios} from "../config/index.js";
import { Navbar, Footer } from "../Components";

const SearchPage = () => {
  const [motorId, setMotorId] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("motor");
        console.log("Fetched data:", response.data);

        // Check if the response data is an array before setting it to state
        if (Array.isArray(response.data)) {
          setFilteredData(response.data);
        } else {
          console.error("Fetched data is not an array:", response.data);
          // Handle the error appropriately (e.g., show an error message)
        }
      } catch (err) {
        console.log("Fetch error:", err);
        // Handle errors appropriately (e.g., show an error message)
      }
    };

    fetchData();
  }, []);

  const searchPhoneData = async (e) => {
    e.preventDefault();
    console.log(searchPhone);
    const formattedSearchPhone = `91${searchPhone}`;
    try {
      const response = await Axios.get(
        `motor/mobile/${formattedSearchPhone}`
      );

      console.log("Search phone data:", response.data);

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
      console.log("Search phone error:", err);
      // Handle errors appropriately (e.g., show an error message)
    }
    setSearchPhone("");
  };

  const searchMotor = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.get(
        `motor/${motorId}`
      );

      console.log("Search motor data:", response.data);

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
      console.log("Search motor error:", err);
      // Handle errors appropriately (e.g., show an error message)
    }
    setMotorId("");
  };

  const getalldata = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.get(
        `get-all-motorData/all`
      );
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
      console.log("Search motor error:", err);
      // Handle errors appropriately (e.g., show an error message)
    }
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
        <h2 >Search Users</h2>

        <div className="search-container">
          <div className="search-input">
            <label>Phone No: </label>
            <input
              className="inp"
              type="Number"
              placeholder="9876543220"
              value={searchPhone}
              onChange={(e) => setSearchPhone(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={searchPhoneData}>
            Search
          </button>
        </div>
      

        <div className="search-container">
          <div className="search-input">
            <label>Motor id: </label>
            <input
              type="text"
              value={motorId}
              onChange={(e) => setMotorId(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={searchMotor}>
            Search
          </button>
          <br />
          <br />

          <button className="btn btn-primary" onClick={getalldata}>
            Get all details
          </button>
   
        </div>

        
        <h2>Filtered Data</h2>

        <table className="table custom-table-bordered table-striped table-responsive-md">
          <thead>
            <tr>
              <th scope="col">Mobile Number</th>
              <th scope="col">Motor Id</th>
              <th scope="col">Fault Status</th>
              <th scope="col">Motor Status</th>
              <th scope="col">Username</th>
              <th scope="col">Time Created </th>
              <th scope="col">Password</th>
              <th scope="col">Block User</th>
              <th scope="col">Delete User</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item._id}>
                <td>{item.mobile_number.substring(2)}</td>
                <td>{item.motor_id}</td>
                <td>{item.fault_status ? "Faulty" : "Not Faulty"}</td>
                <td>{item.motor_status ? "Running" : "Stopped"}</td>
                {/* Additional user details */}
                <td>{item.usernames.join(", ")}</td>
                <td>{new Date(item.createdAt).toLocaleString()}</td>
                {/* Add more fields based on your data structure */}
                <td>{item.password}</td>
                <td>  
                  <button>
                    Block User
                  </button>
                </td>
                <td>
                  <button>
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SearchPage;
