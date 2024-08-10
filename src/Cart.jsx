import React, { useState, useEffect } from 'react';
import './Cart.css';
import countryData from './countryData'; // Assuming you have a file with country data including flags

const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        state: '',
        city: '',
        postalCode: '',
        phone: '',
        countryCode: '',
        shippingOption: '',
        paymentMethod: '',
    });

    useEffect(() => {
        const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(savedCartProducts);
    }, []);

    useEffect(() => {
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    const handleQuantityChange = (productId, change) => {
        setCartProducts(prevCart =>
            prevCart.map(product =>
                product.id === productId ? { ...product, quantity: product.quantity + change } : product
            ).filter(product => product.quantity > 0)
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const nextStep = () => {
        setStep(prevStep => prevStep + 1);
    };

    const prevStep = () => {
        setStep(prevStep => prevStep - 1);
    };

    const renderStepContent = () => {
      
        switch (step) {
            case 1:
                return (
                    <div className="form-container">
                        <h2 style={{textAlign:"center"}}>Customer Information</h2>
                        <div className="form-group">
                            First Name<input type="text" name="firstName"  value={formData.firstName} onChange={handleInputChange} className="half-width" />
                            Last Name<input type="text" name="lastName"  value={formData.lastName} onChange={handleInputChange} className="half-width" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <select name="country" value={formData.country} onChange={handleInputChange}>
                                <option value="">Select your Country</option>
                                {countryData.map((country, index) => (  
                                    <option key={index} value={country.name}>{country.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleInputChange} className="third-width" />
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleInputChange} className="third-width" />
                            <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleInputChange} className="third-width" />
                        </div>
                        <div className="form-group phone-group">
                            <select name="countryCode" value={formData.countryCode} onChange={handleInputChange} className="country-code">
                                <option value="">Select Code</option>
                                {countryData.map((country, index) => (
                                    <option key={index} value={country.dial_code}>{country.flag} {country.dial_code}</option>
                                ))}
                            </select>
                            <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} />
                        </div>
                        <cartbutton onClick={nextStep}>Continue to Shipping</cartbutton>
                    </div>
                );
            case 2:
                return (
                    <div className="form-container">
                        <h2>Shipping Information</h2>
                        <div className="form-group">
                            <select name="shippingOption" value={formData.shippingOption} onChange={handleInputChange}>
                                <option value="">Select Shipping Option</option>
                                <option value="standard">Standard Shipping</option>
                                <option value="express">Express Shipping</option>
                            </select>
                        </div>
                        <button onClick={prevStep}>Back</button>
                        <button onClick={nextStep}>Continue to Payment</button>
                    </div>
                );
            case 3:
                return (
                    <div className="form-container">
                        <h2>Payment Selection</h2>
                        <div className="form-group">
                            <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
                                <option value="">Select Payment Method</option>
                                <option value="creditCard">Credit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </div>
                        <button onClick={prevStep}>Back</button>
                        <button onClick={() => alert('Checkout complete!')}>Complete Checkout</button>
                    </div>
                );
            default:
                return null;
                    
        }
      
    };
    
    return (
        <div className="cart-page">
            <div className="cart-container">
                <div className="cart-component">
                    <h2 className="cart-title">Your Cart</h2>
                    {cartProducts.length > 0 ? (
                        <div className="cart-items">
                            {cartProducts.map(product => (
                                <div key={product.id} className="cart-item">
                                    <img src={product.imgSrc} alt={product.name} />
                                    <div className="cart-item-details">
                                        <p>{product.name}</p>
                                        <p>{product.priceNow}</p>
                                        <div className="cart-item-quantity">
                                            <p>Quantity</p>
                                            <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                                            <span>{product.quantity}</span>
                                            <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
            <div className="checkout-container">
                {renderStepContent()}
            </div>
        </div>
    );
};

export default Cart;