import React, { useState, useEffect } from "react";
import "./ViewMachine.css";
import axios from "axios";

const SearchPage = () => {
  const [motorId, setMotorId] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/motor/");
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
    try {
      const response = await axios.get(
        `http://localhost:4000/api/motor/mobile/${searchPhone}`
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
  };
  const searchMotor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/motor/${motorId}`
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
  };

  const getalldata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/get-all-motorData/all`
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
    <div className="container">
      <h1>Data Search Page</h1>

      <div className="search-input">
        <label>Phone: </label>
        <input
          className="inp"
          type="text"
          placeholder="98765432201"
          value={searchPhone}
          onChange={(e) => setSearchPhone(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={searchPhoneData}>
        Search
      </button>

      <div className="search-input">
        <label>Machine id: </label>
        <input
          type="text"
          value={motorId}
          onChange={(e) => setMotorId(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={searchMotor}>
        Search
      </button>

      <button className="btn btn-primary" onClick={getalldata} >
        Fetch all details
      </button>

      {/* Data is fetched and set to the filteredData state inside useEffect */}

      <h2>Filtered Data</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Mobile Number</th>
            <th scope="col">Motor Id</th>
            <th scope="col">Fault Status</th>
            <th scope="col">Motor Status</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item._id}>
              <td>{item.mobile_number}</td>
              <td>{item.motor_id}</td>
              <td>{item.fault_status ? "Faulty" : "Not Faulty"}</td>
              <td>{item.motor_status ? "Running" : "Stopped"}</td>
              {/* Additional user details */}
              <td>{item.usernames.join(", ")}</td>
              {/* Add more fields based on your data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
