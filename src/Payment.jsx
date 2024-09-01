import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Payment.css';

function Form() {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('personal');
  const [categoryType, setCategoryType] = useState('');
  
 
 
  const [paymentType] = useState('');

  const handleCategoryChange = (e) => {
    setCategoryType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    navigate('/thank-you');
  };

  return (
    <div>
      <div className="donation-form-wrapper">
        <div className="donation-form-container">
          <h2 className="form-title">Payment </h2>
          <div className="steps">
            <div className={`step ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>
              <span>1</span> Billing Details
            </div>
            <div className={`step ${activeTab === 'category' ? 'active' : ''}`} onClick={() => setActiveTab('category')}>
              <span>2</span> Card Details
            </div>
            <div className={`step ${activeTab === 'address' ? 'active' : ''}`} onClick={() => setActiveTab('address')}>
              <span>3</span> Checkout
            </div>
          </div>
          <form onSubmit={handleSubmit} className="donation-form-main">
            {activeTab === 'personal' && (
              <div className="form-section">
                <label htmlFor="username" className="form-label">                
                  <FontAwesomeIcon icon={faUser} /> Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your Name"
                  required
                />

                <label htmlFor="mobileNumber" className="form-label">
                  <FontAwesomeIcon icon={faPhone} /> Mobile Number
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your Mobile number"
                  required
                />
                <label htmlFor="address" className="form-label">
                  <FaAddressCard /> Addresss
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your Address"
                  required
                />
                <label htmlFor="emailr" className="form-label">
                  <MdEmail />Email
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            )}

            {activeTab === 'category' && (
              <div className="form-section">
                <label htmlFor="categoryType" className="form-label">
                  Card Category Type
                </label>
                <select
                  className="form-input"
                  id="categoryType"
                  name="categoryType"
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="food">Credit Card </option>
                  <option value="fund">Debit card</option>
                  <option value="clothes">Via Mobile Number</option>
                  
                 
                </select>

                {categoryType === 'food' && (
                  <div className="food-category">
                    <label htmlFor="estimatedTime" className="form-label">
                      Card Number
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="estimatedTime"
                      name="estimatedTime"
                      placeholder="6745-3423-8900"
                      required
                    />
<label htmlFor="creditCardExpiryDate" className="form-label">Expiry Date</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardExpiryDate"
                          name="creditCardExpiryDate"
                          placeholder="Expiry Date (e.g., 12/24)"
                          required
                        />
                        <label htmlFor="creditCardCvv" className="form-label">CVV</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardCvv"
                          name="creditCardCvv"
                          placeholder="CVV (e.g., 123)"
                          required
                        />
                  
                  </div>
                )}

                {['clothes', 'stationery', 'grocery', 'footwear'].includes(categoryType) && (
                  <div className="general-category">
                    
                    
                    <label htmlFor="totalQuantity" className="form-label">
                      Mobile Number
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="totalQuantity"
                      name="totalQuantity"
                      placeholder="45869586956"
                      
                    />
                    <label htmlFor="totalQuantity" className="form-label">
                      UPI ID
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="totalQuantity"
                      name="totalQuantity"
                      placeholder="upid@gmail.in"
                      
                    />
                  </div>
                )}

                {categoryType === 'clothes' && (
                  <div className="fund-category">
                    
                    {paymentType === 'debitCard' && (
                      <div className="card-details">
                        <label htmlFor="creditCardNumber" className="form-label">Card Number</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardNumber"
                          name="creditCardNumber"
                          placeholder="Card Number (e.g., 1234 5678 9012 3456)"
                          required
                        />
                        <label htmlFor="creditCardExpiryDate" className="form-label">Expiry Date</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardExpiryDate"
                          name="creditCardExpiryDate"
                          placeholder="Expiry Date (e.g., 12/24)"
                          required
                        />
                        <label htmlFor="creditCardCvv" className="form-label">CVV</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardCvv"
                          name="creditCardCvv"
                          placeholder="CVV (e.g., 123)"
                          required
                        />
                      </div>
                    )}

                    {paymentType === 'debitCard' && (
                      <div className="card-details">
                        <label htmlFor="debitCardNumber" className="form-label">Card Number</label>
                        <input
                          className="form-input"
                          type="text"
                          id="debitCardNumber"
                          name="debitCardNumber"
                          placeholder="Card Number (e.g., 1234 5678 9012 3456)"
                          required
                        />
                        <label htmlFor="debitCardExpiryDate" className="form-label">Expiry Date</label>
                        <input
                          className="form-input"
                          type="text"
                          id="debitCardExpiryDate"
                          name="debitCardExpiryDate"
                          placeholder="Expiry Date (e.g., 12/24)"
                          required
                        />
                        <label htmlFor="debitCardCvv" className="form-label">CVV</label>
                        <input
                          className="form-input"
                          type="text"
                          id="debitCardCvv"
                          name="debitCardCvv"
                          placeholder="CVV (e.g., 123)"
                          required
                        />
                      </div>
                    )}

                    
                  </div>
                )}
              </div>
            )}

            {activeTab === 'address' && (
              <div className="form-section">
                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street (e.g., Elm Street)"
                  required
                />

              </div>
            )}

            <div className="form-navigation">
              <button type="button" className="form-nav-button" onClick={() => setActiveTab('personal')}>Previous</button>
              <button type="button" className="form-nav-button" onClick={() => setActiveTab('category')}>Next</button>
              {activeTab === 'address' && <button type="submit" className="form-submit-button">Submit</button>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
