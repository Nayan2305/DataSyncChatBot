import React, { useState } from "react";
import "./User.css"; // Import your CSS file
import userProfileImage from './user.png'; // Import the user profile image
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components";
import { Footer } from "../Components";


const User = () => {
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

    const returnHome = () => {
        navigate('/Home');
    };

    const dataFromDatabase = [
        { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
        { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
        { id: 3, first: "Larry", last: "the Bird", handle: "@twitter" },
    ];

    return (
        <>
            <Navbar></Navbar>
            <div className="user-profile">
                <img
                    src={userProfileImage}
                    alt="User Profile"
                    className="user-profile-image"
                />
                <h2 className="user-name">{userData.username}</h2>
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

                {/* <div className="additional-table-container"> */}
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
                        {dataFromDatabase.map((data) => (
                            <tr key={data.id}>
                                <th scope="row">{data.id}</th>
                                <td>{data.first}</td>
                                <td>{data.last}</td>
                                <td>{data.handle}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Footer></Footer>


        </>
    );
};

export default User;
