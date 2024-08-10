import React from 'react';
import './ForgotPassword.css';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
//import background from '../src/background.mp4';
const ForgotPassword = () => {
    return (
        <div className="App">
             {/* <video autoPlay muted loop className="background-video">
                <source src={background} type="video/mp4" />
            </video> */}
            <div className="card1">
                <h2>Forgot Password</h2>
                <form>
                <div>
        <TextField
          required
          id="filled-required"
          label="Enter your email" /></div><br/>
                    <button type="submit">Send Reset Link</button>
                </form>
                <p className="back-to-login-link">
                    Remembered your password? <br/><Link to="/login">Back to Login</Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
