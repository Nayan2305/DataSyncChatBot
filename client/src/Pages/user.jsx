import React, { useState } from "react";
import "./user.css"; // Import your CSS file
import userProfileImage from './user.png'; // Import the user profile image
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    username: "John Doe",
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    address: "123 Main St, Cityville",
    bot_id:"1234",
    bot_token:"ifi48f9wdf8"
  });
  const click = () =>{
    navigate('/Home')
  }
  const handleEditClick = () => {
    setIsEditing(true);
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

  return (
    <>
     <div class="center">
        <button onClick={click}  class="return">Return Home</button>
    </div>
    <div className="centered-container">
      <div className="user-profile">
        <img src={userProfileImage} alt="User Profile" className="user-profile-image" />
        <h2 className="user-name">{userData.username}</h2>
        <table className="user-profile-table">
  <tbody>
    <tr className={isEditing ? "" : "marked-row"}>
      <td className="entry-label">Phone Number:</td>
      <td className="entry-value">
        {isEditing ? (
          <input
            type="text"
            name="phoneNumber"
            value={userData.phoneNumber}
            onChange={handleInputChange}
          />
        ) : (
          userData.phoneNumber
        )}
      </td>
    </tr>
    <tr className={isEditing ? "" : "marked-row"}>
      <td className="entry-label">Email:</td>
      <td className="entry-value">
        {isEditing ? (
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        ) : (
          userData.email
        )}
      </td>
    </tr>
    <tr className={isEditing ? "" : "marked-row"}>
      <td className="entry-label">Address:</td>
      <td className="entry-value">
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
          />
        ) : (
          userData.address
        )}
      </td>
    </tr>
    <tr>
    <td className="entry-label">Bot-id:</td>
      <td>
      {(userData.bot_id)}
      </td>
    </tr>
    <tr>
    <td className="entry-label">Bot-Token:</td>
      <td>
      {(userData.bot_token)}
      </td>
    </tr>
  </tbody>
</table>
        {isEditing ? (
          <button className="save-button" onClick={handleSaveClick}>
            Save
          </button>
        ) : (
          <button className="edit-button" onClick={handleEditClick}>
            Edit
          </button>
        )}
      </div>
    </div>
    </>
  );
};

export default User;
