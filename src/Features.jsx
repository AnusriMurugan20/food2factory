import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faHandshake, faTruck,faRecycle } from '@fortawesome/free-solid-svg-icons';
import { MdMicrowave } from "react-icons/md";
const Features = () => {
    return (
        
        <div className="features-container">
            <div className="feature-item">
                <FontAwesomeIcon icon={faLeaf} className="feature-icon" />
                <h3>0% Plastic – The healthy choice</h3>
                <p>Ecoware is 100% plant biomass such as sugarcane waste and does not contain any binder, lining, adhesive, laminate, or coating.</p>
            </div>
            <div className="feature-item">
                <MdMicrowave className="feature-icon" />
                <h3>Microwave Safe</h3>
                <p>Ecoware can be safely used in a microwave, or oven and sustain temperatures from -20° C to +140° C.</p>
            </div>
            <div className="feature-item">
                <FontAwesomeIcon icon={faRecycle} className="feature-icon" />
                <h3>Backyard Biodegradable</h3>
                <p>All our products will biodegrade naturally in the soil in 90-100 days in the presence of microbes. Works just as well for landfills too.</p>
            </div>
            <div className="feature-item">
                <FontAwesomeIcon icon={faHandshake} className="feature-icon" />
                <h3>Trust</h3>
                <p>Our brand is built on integrity and transparency. That’s why we have global certifications and accreditations to give confidence in your purchase.</p>
            </div>
            <div className="feature-item">
                <FontAwesomeIcon icon={faTruck} className="feature-icon" />
                <h3>No Mess No Stress</h3>
                <p>Ecoware lets you focus on the food by providing a hassle-free serving option. Disposal is quick and easy because no waste segregation is required at the source.</p>
            </div>
        </div>
    );
};

export default Features;
