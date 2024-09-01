import React from 'react';
import Navbar from './Navbar';
import Slider from './Slider/Slider';
import Features from './Features';
import Media from './Media';
import Gallery from './Gallery';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <div style={{ textAlign: "center", fontFamily: "Poppins", fontSize: "30px", fontWeight: "bold", color: "darkgreen", paddingTop: "60px" }}>
        Choose Farm To Factory
      </div>
      <Features />
      <Media />
      <Gallery />
      <Footer />
    </div>
  );
}

export default LandingPage;
