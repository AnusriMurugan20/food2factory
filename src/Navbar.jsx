import React, { useContext, useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo1 from '../src/logo1.png';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { UserContext } from './UserContext';
import Sidebar from './Sidebar';

const Navbar = () => {
  const { user } = useContext(UserContext); // Get user context
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="main-container">
      <nav>
        <div className="nav-logo-container">
          <img src={logo1} alt="Logo" className="navimg" />
          <span style={{ marginBottom: "2px", fontFamily: "Alegreya", fontSize: "30px", marginLeft: "10px" }}>
            Farm To Factory
          </span>
        </div>
        <div className="navbar-links-container">
          <a href="/Home">Community</a>
          <a href="/About">About Us</a>
          <a href='/bowlItem'>Product</a>
          <div style={{ paddingLeft: '20px', paddingRight: '10px' }}>
            <Stack spacing={2} direction="row">
              <Link to="/Grow">
                <Button variant="contained" sx={{
                  backgroundColor: '#4E944F',
                  color: 'white',
                  width: '140px',
                  height: '50px',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}>Grow With Us</Button>
              </Link>
            </Stack>
          </div>
          {!user ? (
            <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
              <Stack spacing={2} direction="row">
                <Link to="/Login">
                  <Button variant="contained" sx={{
                    backgroundColor: '#4E944F',
                    color: 'white',
                    width: '140px',
                    height: '50px',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}>Login</Button>
                </Link>
              </Stack>
            </div>
          ) : (
            <div>
              <FaUserCircle className="navv-icon" onClick={toggleSidebar} />
            </div>
          )}
        </div>
      </nav>
      {sidebarOpen && <Sidebar closeSidebar={closeSidebar} />}
    </div>
  );
}

export default Navbar;
