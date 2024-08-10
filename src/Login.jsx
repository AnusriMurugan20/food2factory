import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import file from '../src/file.png';
import TextField from '@mui/material/TextField';
// import background from '../src/background.mp4';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        const response = await axios.post('http://localhost:9001/login', {
          username:username,
          password:password,
        });

        if (response.status === 200) {
          navigate('/LandingPage');
        } else {
          alert('Login failed. Please try again.');
        }
      } catch (error) {
        console.error('There was an error logging in!', error);
        alert('Login failed. Please try again.');
      }
    } else {
      alert('Please fill out both the username and password fields.');
    }
  };

  return (
    <div className="login-container">
      {/* <video autoPlay muted loop className="background-video">
        <source src={background} type="video/mp4" />
      </video> */}
      <div className="card">
        <img src={file} alt="Logo" className="logo2" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
            <div style={{ marginBottom: '20px', width: '300px' }}>
              <TextField
                required
                id="filled-required"
                label="Username"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                InputProps={{
                  style: { fontWeight: 'bold', color: '#000000' },
                }}
                InputLabelProps={{
                  style: { fontWeight: 'bold', color: '#000000' },
                }}
              />
            </div>
            <div style={{ marginBottom: '20px', width: '300px' }}>
              <TextField
                required
                id="filled-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  style: { fontWeight: 'bold', color: '#000000' },
                }}
                InputLabelProps={{
                  style: { fontWeight: 'bold', color: '#000000' },
                }}
              />
            </div>
          </div>

          <div className="forgot-password-link">
            <Link to="/forgot-password"><h4>Forgot password?</h4></Link>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="social-login">
          <h3>Or Sign Up Using</h3>
          <div className="social-buttons">
            <a href="https://www.facebook.com/login" className="social-btn facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/login" className="social-btn twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://accounts.google.com/signin" className="social-btn google">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
          </div>
        </div>
        <p>
          Don't have an account? <Link to="/signup"><h4>Signup here</h4></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
