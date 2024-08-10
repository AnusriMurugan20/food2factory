import React from 'react';
import './Soil.css';
const Soil = () => {
    return (
        <div className="farm-and-retail-container">
          <h1>Our Process</h1>
            <div className="section farm-section">
                <div className="image">
                    <img src="https://www.earnest.ag/wp-content/uploads/2021/05/Farm-Process@2x.png" alt="Farm" />
                </div>
                <div className="info-card">
                    <h1>Farm</h1>
                    <p>One cow produces 12 tons of manure a year.</p>
                    <p>Managing this waste is a big pain. Manure piles produce Greenhouse Gas Emissions (GHG) and can leak into waterways.</p>
                    <p>Farmers need help managing all this waste. <span className="highlight">We Can Help.</span></p>
                    <div className="steps">
                        <div className="step">
                            <span className="step-number">1</span>
                            <span className="step-text"><b>DROP</b> - We drop our BIO BINS</span>
                        </div>
                        <div className="step">
                            <span className="step-number">2</span>
                            <span className="step-text"><b>FILL</b> - Farmers fill them up</span>
                        </div>
                        <div className="step">
                            <span className="step-number">3</span>
                            <span className="step-text"><b>SHIP</b> - We pick them up and pay per filled BIO BIN</span>
                        </div>
                        <div className="step">
                            <span className="step-number">4</span>
                            <span className="step-text"><b>DELIVER</b> - The type of product is delivered to meet demand</span>
                        </div>
                        <div className="step">
                            <span className="step-number">5</span>
                            <span className="step-text"><b>MARKET</b> - Our customers know sell our Products</span>
                        </div>
                        <div className="step">
                            <span className="step-number">6</span>
                            <span className="step-text"><b>SOLD</b> - We guarantee customers will love Earnest products</span>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default Soil;
