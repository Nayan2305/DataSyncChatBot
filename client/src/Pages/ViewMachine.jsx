import React, { useState, useEffect } from "react";
import "./ViewMachine.css";
import { useNavigate } from "react-router-dom";
import { Axios } from "../config/index.js";
import axios from "axios";
import { Navbar, Footer } from "../Components";

const SearchPage = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const [motorId, setMotorId] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filteredData1, setFilteredData1] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDeleteProduct = async (mobile_number) => {
    console.log(mobile_number);
    const formattedMobileNumber = `91${mobile_number}`;
    console.log(formattedMobileNumber);

    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete_users/${formattedMobileNumber}`
      );

      if (response.status === 200) {
        alert("User Deleted Successfully");
      } else {
        console.error(
          "Error deleting. Server responded with status:",
          response.status
        );
      }
    } catch (error) {
      console.error("Error deleting :", error.message);
    }
  };

  const getData = async () => {
    try {
      const response = await Axios.get(`motor/user/${auth}`);

      const userMobileNumber = response.data.mobile_number;

      if (Array.isArray(response.data)) {
        setFilteredData1(response.data);
      } else if (typeof response.data === "object") {
        setFilteredData1([response.data]);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (err) {
      console.log(" error:", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleBlockProduct = async (motor_id) => {
    console.log(motor_id);
    try {
      await axios.put(`http://localhost:4000/api/block_users/${motor_id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting :", error);
    }
  };
  

  const fetchData = async () => {
    try {
      const response = await Axios.get("motor");

      if (Array.isArray(response.data)) {
        setFilteredData(response.data);
      } else {
        console.error("Fetched data is not an array:", response.data);
      }
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchPhoneData = async () => {
    setLoading(true);

    const formattedSearchPhone = `91${searchPhone}`;
    try {
      const response = await Axios.get(`motor/mobile/${formattedSearchPhone}`);

      if (Array.isArray(response.data)) {
        setFilteredData(response.data);
      } else if (typeof response.data === "object") {
        setFilteredData([response.data]);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (err) {
      console.log("Search phone error:", err);
    } finally {
      setLoading(false);
    }

    setSearchPhone("");
  };

  useEffect(() => {
    searchPhoneData();
  }, []);

  const searchMotor = async () => {
    try {
      const response = await Axios.get(`motor/${motorId}`);

      if (Array.isArray(response.data)) {
        setFilteredData(response.data);
      } else if (typeof response.data === "object") {
        setFilteredData([response.data]);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (err) {
      console.log("Search motor error:", err);
    }
    setMotorId("");
  };

  useEffect(() => {
    searchMotor();
  }, []);

  const getalldata = async () => {
    try {
      const response = await Axios.get(`get-all-motorData/all`);
      if (Array.isArray(response.data)) {
        setFilteredData(response.data);
      } else if (typeof response.data === "object") {
        setFilteredData([response.data]);
      } else {
        console.error("Unexpected data format:", response.data);
      }
    } catch (err) {
      console.log("Search motor error:", err);
    }
  };

  useEffect(() => {
    getalldata();
  }, []);

  return (
    <>
      <Navbar />
      <div className="search-container">
        <h2>Search Users</h2>

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

        {loading && <p>Loading...</p>}

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
              <th scope="col">Edit User</th>
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
                <button onClick={() => handleBlockProduct(item.motor_id)}>
                {item.isActive ? "Block User" : "Unblock User"}
                  </button>
                </td>
                <td>
                  <button onClick={() => navigate("/Editpage")}>
                    Edit User
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleDeleteProduct(item.mobile_number.substring(2))
                    }
                  >
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
