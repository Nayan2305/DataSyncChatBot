import React, { useState } from 'react';
import "./ViewMachine.css"

const data = [
  { id: 1, name: 'John Doe', location: 'New York' },
  { id: 2, name: 'Jane Doe', location: 'Los Angeles' },
  { id: 3, name: 'Bob Smith', location: 'Chicago' },
  
];

const SearchPage = () => {
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = () => {
    const filteredByName = data.filter(item =>
      item.name.toLowerCase().includes(searchName.toLowerCase())
    );

    const filteredByLocation = data.filter(item =>
      item.location.toLowerCase().includes(searchLocation.toLowerCase())
    );

    // Combine both filters
    const result = filteredByName.filter(item =>
      filteredByLocation.includes(item)
    );

    setFilteredData(result);
  };

  return (
    <>
    <div className="container">
      <h1>Data Search Page</h1>

      <div>
        <label>Name: </label>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      <div>
        <label>Location: </label>
        <input
          type="text"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>Search</button>
      </div>
      <h2>Filtered Data</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
    </>
  );
};

export default SearchPage;
