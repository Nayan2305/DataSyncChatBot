import React, { useState } from 'react';
import axios from 'axios';
import { Navbar } from '../Components/index.js';
import "./AddMachine.css";

const AddMachine = () => {
  const [selectedMachine, setSelectedMachine] = useState('');
  const [selectedRights, setSelectedRights] = useState([]);
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState(''); 
  const [param3, setParam3] = useState('');
  const [param4, setParam4] = useState('');
  const [param5, setParam5] = useState('');
  const [param6, setParam6] = useState('');
  const [param7, setParam7] = useState('');
  const [param8, setParam8] = useState('');
  const [param9, setParam9] = useState('');
  const [param10, setParam10] = useState('');
  
  const handleMachineChange = event => {
    setSelectedMachine(event.target.value);
  };

  const handleRightsChange = event => {
    const value = event.target.value;
    setSelectedRights([...selectedRights, value]);
  };
  
  const handleCheckboxChange = event => {
    const value = event.target.value;
    if (selectedRights.includes(value)) {
      setSelectedRights(selectedRights.filter(item => item !== value));
    } else {
      setSelectedRights([...selectedRights, value]);
    }
  };


  const handleSubmit = async event => {
    event.preventDefault();

  //   const formData = {
  //     machine: selectedMachine,
  //     rights: selectedRights,
  //     parameter1:
  //   };

  //   try {
     
  //     const response = await axios.post('/api/add-machine', formData);      
  //     if (response.status === 200) {
  //       console.log('Machine added successfully:', response.data);        
  //     } else {
  //       console.error('Error adding machine:', response.data);      
  //     }
  //   } catch (error) {
  //     console.error('Error adding machine:', error);    
  //   }
   };
  return (
    <>
      <Navbar />
    <div className="AddMachine-container">
      <div className="AddMachine-box">
        <h1 className="instagram-logo">Add Machine</h1>
        <form onSubmit={handleSubmit}>
          <label className="label">Select a type of machine:</label>
          <select className="input-field" value={selectedMachine} onChange={handleMachineChange}>
            <option value="option1">Fan</option>
            <option value="option2">Motor</option>
            <option value="option3">Refrigerator</option>
          </select>

          
          <label className="label">Enter the Parameters you need </label>
            <div className="input-grid">
                <div className="input-row">
                  <input type="text" className="input-field" placeholder="Parameter 1" value={param1}  onChange={(e) => setParam1(e.target.value)}/>
                  <input type="text" className="input-field" placeholder="Parameter 2" value={param2}  onChange={(e) => setParam2(e.target.value)}/>
                </div>
                <div className="input-row">
                  <input type="text" className="input-field" placeholder="Parameter 3" value={param3}  onChange={(e) => setParam3(e.target.value)}/>
                  <input type="text" className="input-field" placeholder="Parameter 4" value={param4}  onChange={(e) => setParam4(e.target.value)}/>
                </div>
                <div className="input-row">
                  <input type="text" className="input-field" placeholder="Parameter 5" value={param5}  onChange={(e) => setParam5(e.target.value)}/>
                  <input type="text" className="input-field" placeholder="Parameter 6" value={param6}  onChange={(e) => setParam6(e.target.value)}/>
                </div>
                <div className="input-row">
                  <input type="text" className="input-field" placeholder="Parameter 7" value={param7}  onChange={(e) => setParam7(e.target.value)}/>
                  <input type="text" className="input-field" placeholder="Parameter 8" value={param8}  onChange={(e) => setParam8(e.target.value)}/>
                </div>
                <div className="input-row">
                  <input type="text" className="input-field" placeholder="Parameter 9" value={param9}  onChange={(e) => setParam9(e.target.value)}/>
                  <input type="text" className="input-field" placeholder="Parameter 10" value={param10}  onChange={(e) => setParam10(e.target.value)}/>
                </div>
              </div>

          <button type="submit" className="login-button">
            Add Machine
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default AddMachine;