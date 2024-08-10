import React, { useState, useEffect } from 'react';
import './checkout.css';
const Checkout = () => {
    const [cartProducts, setCartProducts] = useState([]);
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        city: '',
        zip: '',
        country: ''
    });

    useEffect(() => {
        const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(savedCartProducts);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({ ...shippingDetails, [name]: value });
    };

    const handlePlaceOrder = () => {
        alert('Order placed successfully!');
        localStorage.removeItem('cartProducts');
        setCartProducts([]);
        setShippingDetails({
            name: '',
            address: '',
            city: '',
            zip: '',
            country: ''
        });
    };

    const totalAmount = cartProducts.reduce((acc, product) => acc + product.priceNow * product.quantity, 0);

    return (
        <div className="checkout-container">
            <div className="cart-review">
                <h2>Review Your Cart</h2>
                {cartProducts.length > 0 ? (
                    <div className="cart-items">
                        {cartProducts.map(product => (
                            <div key={product.id} className="cart-item">
                                <img src={product.imgSrc} alt={product.name} />
                                <div className="cart-item-details">
                                    <p>{product.name}</p>
                                    <p>${product.priceNow}</p>
                                    <p>Quantity: {product.quantity}</p>
                                </div>
                            </div>
                        ))}
                        <p className="total-amount">Total Amount: ${totalAmount}</p>
                    </div>
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
            <div className="shipping-details">
                <h2 style={{ fontSize: "24px",fontWeight: "bold",marginBottom: "20px"}}>Shipping Details</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" value={shippingDetails.name} onChange={handleInputChange} />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" value={shippingDetails.address} onChange={handleInputChange} />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" value={shippingDetails.city} onChange={handleInputChange} />
                    </label>
                    <label>
                        ZIP:
                        <input type="text" name="zip" value={shippingDetails.zip} onChange={handleInputChange} />
                    </label>
                    <label>
                        Country:
                        <input type="text" name="country" value={shippingDetails.country} onChange={handleInputChange} />
                    </label>
                </form>
                <button className="place-order-button" onClick={handlePlaceOrder}>Place Order</button>
            </div>
        </div>
    );
};

export default Checkout;
