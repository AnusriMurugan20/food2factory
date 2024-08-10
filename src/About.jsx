import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
const About = () => {
    return (
        <div className="about-us-page-container">
            <div className="about-us-page-text-section">
                <h2 className="about-us-heading">About Us</h2>
                <h1>Helping businesses succeed through the power of video.</h1>
                <p style={{textAlign:"left"}}>
                Farm2Factory is a revolutionary platform dedicated to bridging the 
gap between farmers and industries by transforming agricultural and 
animal waste into valuable resources. Our website facilitates the purchase 
of waste products from farmers, including coconut shells, cotton stems, 
wheat straw, rice straw, sugarcane bagasse, corn stalks, and animal waste 
like cow dung and goat manure. By efficiently collecting and selling these 
materials to various industries, Farm2Factory promotes sustainable 
practices and supports the agricultural community. Join us in turning waste 
into wealth and contributing to a greener future.  </p>
                <Link to="/SignUp"><button className="about-us-page-signup-button">Sign Up for Free</button></Link>
            </div>
            <div className="about-us-page-image-section">
                <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Banner-Illustrations-1.png" alt="Person working" />
            </div>
        </div>
    );
}

export default About;
