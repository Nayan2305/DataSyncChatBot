import React, { useState, useEffect } from 'react';
import './ViewMachine.css';
import axios from 'axios';

const SearchPage = () => {
  const [motorId, setMotorId] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/motor/');
        setFilteredData(response.data);
      } catch (err) {
        console.log(err);
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
      setFilteredData(response.data);
    } catch (err) {
      console.log(err);
      // Handle errors appropriately (e.g., show an error message)
    }
  };

  const searchMotor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/api/motor/${motorId}`
      );
      setFilteredData(response.data);
    } catch (err) {
      console.log(err);
      // Handle errors appropriately (e.g., show an error message)
    }
  };

  return (
    <div className="container">
      <h1>Data Search Page</h1>

      <div className="search-input">
        <label>Phone: </label>
        <input 
        className='inp'
          type="text"
          placeholder='98765432201'
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

      {filteredData.length >= 0 && (
        <>
          <h2>Filtered Data</h2>

          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Mobile Number</th>
                <th scope="col">Motor Id</th>
                <th scope="col">Fault Status</th>
                <th scope="col">Motor Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.mobile_number}</td>
                  <td>{item.motor_id}</td>
                  <td>{item.fault_status}</td>
                  <td>{item.motor_status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default SearchPage;
