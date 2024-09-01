import React, { useState, useEffect } from 'react';
import './Cart.css';
// import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Cart = () => {
    const [cartProducts, setCartProducts] = useState([]);
    

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

    const handleCheckout = () => {
      
    };

    return (
        <div className="cart-page">
            <div className="cart-container" style={{ maxWidth: '600px' }}>
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
                            <Link to="/Payment"><button className="checkout-button" onClick={handleCheckout}>
                                Checkout
                            </button></Link>
                        </div>
                    ) : (
                        <p>Your cart is empty</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;
