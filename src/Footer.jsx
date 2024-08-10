import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaAngleRight, FaCcVisa, FaCcPaypal, FaCcAmex, FaCcMastercard, FaCcDiscover, FaCreditCard } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h2 style={{color:'darkgreen'}}>Farm2Factory</h2>
          <p style={{color:'black'}}>
            Join us in the Green Revolution, where we turn agricultural waste into valuable industrial resources. Our mission is to promote a sustainable future by reducing waste and transforming it into wealth. Together, we can make a significant impact on our environment and economy.
          </p>
          <div className="footer-social-icons">
            <a href="#"><FacebookIcon /></a>
            <a href="#"><TwitterIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><LinkedInIcon /></a>
            <a href="#"><GitHubIcon /></a>
          </div>
        </div>
        <div className="footer-section footer-links">
          <h3 style={{color:'darkgreen'}}>Useful Links</h3>
          <ul>
            <li><Link to="/Home"><FaAngleRight /> Community</Link></li>
            <li><Link to="/About"><FaAngleRight /> About Us</Link></li>
            <li><Link to="/Plates"><FaAngleRight /> Products</Link></li>
            <li><Link to="/Grow"><FaAngleRight /> Grow With Us</Link></li>
            <li><Link to="/Fertilizer"><FaAngleRight /> Fertilizers</Link></li>
            <li><a href="#"><FaAngleRight /> Partner Program</a></li>
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span style={{color:'black'}}>123 Street New York, USA</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span style={{color:'black'}}>farm2factory@gmail.com</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <span style={{color:'black'}}>(+012) 3456 7890</span>
          </div>
          <h3>Payments</h3>
          <div className="footer-credit-icons">
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcAmex />
            <FaCcMastercard />
            <FaCcDiscover />
            <FaCreditCard />
          </div>
        </div>
        <div className="footer-section footer-newsletter">
          <h3 style={{color:'darkgreen',fontWeight:'bolder',fontSize:'24px'}}>Newsletter</h3>
          <p style={{color:'black'}}>
          Stay informed about our latest sustainable innovations and exclusive offers by subscribing to our Farm2Factory newsletter.  </p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="subscribe-button"><p style={{color:'black',textAlign:'center'}}><span className='subscribe'>Subscribe Now</span></p></button>
          </form>
          <p style={{color:'black'}}>Call to Our Experts Free: +0123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
          <span>&copy; Farm2Factory, All rights reserved. Designed by TechWave 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
