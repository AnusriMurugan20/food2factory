// src/EarnestPromise.js
import React from 'react';
import FarmersToGardeners from './Home';
import './EarnestPromise.css';
import Soil from './Soil';
const EarnestPromise = () => {
  return (
    <div className="earnest-promise">
      <h1 className="earnest-title">The Farm2Factory Promise</h1>
      <p className="earnest-subtitle">Value in Every Purchase</p>
      <div className="earnest-cards">
        <div className="earnest-card">
          <div className="earnest-icon">🏠</div>
          <h2>Locally Sourced</h2>
          <p>Local agriculture waste turned to soil</p>
          <p>Partnering with local farmers to better the health of our land, water, and air. It’s a partnership with a far reaching impact you can see, smell, and feel.</p>
        </div>
        <div className="earnest-card">
          <div className="earnest-icon">🔬</div>
          <h2>Quality Tested</h2>
          <p>Sifted and inspected to meet our highest standards</p>
          <p>In manufacturing soil amendments, higher quantity equals higher payout. We believe quality supersedes everything. If we put our name on it, we guarantee quality.</p>
        </div>
        <div className="earnest-card">
          <div className="earnest-icon">♻️</div>
          <h2>Giving Back</h2>
          <p>Farmers and the environment win</p>
          <p>A percentage of profits are returned to local farmers. We help them manage their waste and make a profit.</p>
        </div>
      </div>
      <FarmersToGardeners />
      <Soil/>
    </div>
  );
};

export default EarnestPromise;
