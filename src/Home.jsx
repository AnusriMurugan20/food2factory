// src/FarmersToGardeners.js
import React from 'react';
import './Home.css';

const FarmersToGardeners = () => {
  return (
    <div className="ftg-container">
      <div className="ftg-section">
        <h2 className="ftg-title">From Farmers...</h2>
        <hr className="ftg-divider" />
        <div className="ftg-content">
          <div className="ftg-text">
            <h3 className="ftg-subtitle">Farm2Factory Farmers</h3>
            <p>Products created in partnership with Local Farmers</p>
          </div>
          <div className="ftg-images">
            <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Mask-Group-94@2x.png" alt="Farmer 1" className="ftg-image" />
            <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Mask-Group-100@2x.png" alt="Farmer 2" className="ftg-image" />
            <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Mask-Group-98@2x.png" alt="Farmer 3" className="ftg-image" />
          </div>
        </div>
      </div>
      <div className="ftg-section">
        <h2 className="ftg-title">To Gardeners...</h2>
        <hr className="ftg-divider" />
        <div className="ftg-content">
          <div className="ftg-text">
            <h3 className="ftg-subtitle">Gardening made for you</h3>
            <p>Our growing community, loves gardening with our Community</p>
          </div>
          <div className="ftg-images">
            <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Mask-Group-93@2x.png" alt="Gardener 1" className="ftg-image" />
            <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Mask-Group-99@2x.png" alt="Gardener 2" className="ftg-image" />
            <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Mask-Group-92@2x.png" alt="Gardener 3" className="ftg-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersToGardeners;
