import React, { useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import logo1 from '../src/logo1.png';
import { Link, useLocation } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
    const location = useLocation();
    
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <div className="main-container">
            <nav>
                <div className="nav-logo-container">
                    <img src={logo1} alt="Wl" className="navimg" />
                    <span style={{marginBottom:"2px",fontFamily:"Alegreya",fontSize:"30px",marginLeft:"10px"}}>Farm To Factory</span>
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
                                    width: '140px',fontWeight:'bold',
                                    height: '50px',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    },
                                }}>Grow With Us</Button>
                            </Link>
                        </Stack>
                    </div>
                    
                    {/* New Login Button */}
                    <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                        <Stack spacing={2} direction="row">
                            <Link to="/Login">
                                <Button variant="contained" sx={{
                                    backgroundColor: '#4E944F',
                                    color: 'white',
                                    width: '140px',
                                    height: '50px',fontWeight:'bold',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                    },
                                }}>Login</Button>
                            </Link>
                        </Stack>
                    </div>

                    {/* Profile Icon with Dropdown */}
                    <div className="dropdown">
                        <AccountCircleIcon className="navv-icon" onClick={toggleDropdown} />
                        {dropdownOpen && (
                            <div className="dropdown-content" onMouseLeave={closeDropdown}>
                                <Link to="/Profile" className="dropdown-item">Account Settings</Link>
                                <Link to="/Logout" className="dropdown-item">Logout</Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
