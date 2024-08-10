import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import file from '../src/file.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// import background from '../src/background.mp4';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && mobileNumber && email && password && location) {
      try {
        const response = await axios.post('http://localhost:9001/reg', {
          username:username,
          phone: mobileNumber,
          email:email,
          password:password,
          location:location,
        });

        console.log('Response:', response);

        if (response.status === 200) {
          console.log('Signup successful');
          navigate('/LandingPage');
        } else {
          console.log('Signup failed:', response.data);
          alert('Signup failed. Please try again.');
        }
      } catch (error) {
        console.error('There was an error signing up!', error);
        alert('Signup failed. Please try again.');
      }
    } else {
      alert('Please fill out all required fields.');
    }
  };

  return (
    <div className="signup-container">
      {/* <video autoPlay muted loop>
        <source src={background} type="video/mp4" />
      </video> */}
      <div className="signup-card">
        <img src={file} alt="Logo" className="logo" />
        <h2 style={{ marginTop: '9px', color: 'darkgreen' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px' }}>
              <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5, paddingLeft: '20px' }} />
              <TextField
                required
                id="username"
                label="UserName"
                variant="standard"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{ flex: 1, maxWidth: '275px' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px' }}>
              <CallIcon sx={{ color: 'black', mr: 1, my: 0.5, paddingLeft: '20px' }} />
              <TextField
                required
                id="mobile-number"
                label="Mobile Number"
                variant="standard"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                sx={{ flex: 1, maxWidth: '275px' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px' }}>
              <EmailIcon sx={{ color: 'black', mr: 1, my: 0.5, paddingLeft: '20px' }} />
              <TextField
                required
                id="email"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ flex: 1, maxWidth: '275px' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px', color: 'black' }}>
              <VisibilityOff sx={{ color: 'black', mr: 1, my: 0.5, paddingLeft: '20px' }} />
              <TextField
                required
                id="password"
                label="Password"
                variant="standard"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ flex: 1, maxWidth: '275px' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginBottom: '20px', color: 'black' }}>
              <LocationOnIcon sx={{ color: 'black', mr: 1, my: 0.5, paddingLeft: '20px' }} />
              <TextField
                id="location"
                label="Add Your Location"
                variant="standard"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                sx={{ flex: 1, maxWidth: '275px' }}
              />
            </Box>
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login"><h4>Login here</h4></Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
