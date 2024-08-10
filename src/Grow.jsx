import React, { useState } from 'react';
import './Grow.css';
import { Link } from 'react-router-dom';

const FormComponent = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: {
      wasteManagement: false,
      soilAmendment: false,
      microbeTechnology: false,
    },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000); // Display the notification for 3 seconds
  };

  return (
    <div className="backg">
    <div className="form-card-unique">
      <Link to="/LandingPage"><span className="close-button-unique" onClick={onClose}>×</span></Link>
      <div className="form-container-unique">
        <h2>Talk Growth</h2>
        <p>
          Complete this short form, and our Farm to Factory team member will reach out right away.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group-unique">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="form-group-unique">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
          </div>
          <div className="form-group-unique">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          <div className="form-group-unique">
            <p>Which Services Are You Interested In?</p>
            <div className="checkbox-group-unique">
              <input
                type="checkbox"
                id="wasteManagement"
                name="wasteManagement"
                checked={formData.services.wasteManagement}
                onChange={handleChange}
              />
              <label htmlFor="wasteManagement">
                <strong>Waste Management Service</strong>
                <span>We partner with you to turn your waste into money, ensuring we undertake the leg work and you maximize your profit.</span>
              </label>
            </div>
            <div className="checkbox-group-unique">
              <input
                type="checkbox"
                id="soilAmendment"
                name="soilAmendment"
                checked={formData.services.soilAmendment}
                onChange={handleChange}
              />
              <label htmlFor="soilAmendment">
                <strong>Soil Amendment Products</strong>
                <span>Our team is here to help answer any questions you may have, including product specific information or bulk buying options.</span>
              </label>
            </div>
            <div className="checkbox-group-unique">
              <input
                type="checkbox"
                id="microbeTechnology"
                name="microbeTechnology"
                checked={formData.services.microbeTechnology}
                onChange={handleChange}
              />
              <label htmlFor="microbeTechnology">
                <strong>Bagasse Products</strong>
                <span>Here to help you remove the organic waste of sugarcane that turn into product and you can earn the money from waste.</span>
              </label>
            </div>
          </div>
          <div className="grow-btn-unique"><button>Grow With Us</button></div>
        </form>
        {isSubmitted && <div className="notification-unique">Your form has been submitted!</div>}
      </div>
    </div>
    </div>
  );
};

export default FormComponent;
