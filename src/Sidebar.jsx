import React, { useContext } from 'react';
import { UserContext } from './UserContext';

import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Sidebar = ({ closeSidebar }) => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    closeSidebar(); // Close sidebar after logging out
  };

  return (
    <div className="sidebar">
      <FaTimes className="close-btn" onClick={closeSidebar} />
      {user ? (
        <div className="sidebar-content">
          <div className="profile-section">
            <img src={user.profileImage || 'default-profile.png'} alt="Profile" className="profile-image" />
            <h2 className="username">{user.username}</h2>
          </div>
          <div className="user-details">
            <p><strong>Location:</strong> {user.location || 'Enter your location'}</p>
            <p><strong>Email:</strong> {user.email || 'Enter your email'}</p>
            <p><strong>Phone:</strong> {user.phone || 'Enter your phone number'}</p>
          </div>
          <Link to="/Profile" className="edit-profile-button">
            Edit Profile
          </Link>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      ) : (
        <div className="sidebar-content">
          {/* Keep the sidebar content clean after logout */}
          <p style={{ fontStyle: 'italic', color: '#555' }}>Please log in to see your profile.</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;