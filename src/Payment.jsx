import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
    const location = useLocation();
    const cartItems = location.state?.cartItems || [];
    const navigate = useNavigate();

    const handlePayment = () => {
        alert("Payment Completed");
        navigate('/');
    };

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => {
        const price = parseFloat(item.priceNow.replace('$', '').split('(')[0]);
        return total + price;
    }, 0);

    return (
        <div className="payment-page">
            <div className="payment-container">
                <h2>Payment Information</h2>
                <div className="order-summary">
                    <h3>Order Summary</h3>
                    {cartItems.map((item) => (
                        <div key={item.id} className="item-details">
                            <img src={item.imgSrc} alt={item.name} />
                            <div>
                                <p>{item.priceNow}</p>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                    <div className="order-total">
                        <p>Total to Pay: ${totalAmount.toFixed(2)}</p>
                    </div>
                </div>
                <button className="submit-button" onClick={handlePayment}>Submit</button>
            </div>
        </div>
    );
};

export default Payment;
