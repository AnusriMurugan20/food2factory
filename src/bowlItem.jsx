
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoCartOutline, IoHeartOutline, IoHeart } from 'react-icons/io5';
import { RiShoppingCartFill } from "react-icons/ri";
import { TbHeart } from "react-icons/tb";
import './bowlItem.css';

const Shop = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

    const products = [
        { id: 1, name: 'Banana Stems', imgSrc: 'https://www.thestatesman.com/wp-content/uploads/2022/03/banana-stem.jpg', priceBefore: '$990.00', priceNow: '$749.00(incl. of all taxes)' },
        { id: 2, name: 'Rice Straws', imgSrc: 'https://media.istockphoto.com/id/1206200429/photo/straw-in-the-rice-fields-closeup-of-photo.jpg?s=612x612&w=0&k=20&c=iQcIKig5BidT1fdboHOY7pPuB3W82EpOAElad8srJe4=', priceBefore: '$1090.00', priceNow: '$849.00(incl. of all taxes)' },
        { id: 3, name: 'Coconut Husks', imgSrc: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM=', priceBefore: '$1200.00', priceNow: '$999.00(incl. of all taxes)' },
        { id: 4, name: 'Sugarcane Bagasse', imgSrc: 'https://media.istockphoto.com/id/1492025718/photo/bagasse-is-dried-in-the-sun-for-recycling.jpg?s=612x612&w=0&k=20&c=IbFXUChZAuuKUHI_zAfqvtuhqeK-hBLl7g1Lks3uXYs=', priceBefore: '$1240.00', priceNow: '1100.00(incl. of all taxes)' },
        { id: 5, name: 'GroundNut Shells', imgSrc: 'https://media.istockphoto.com/id/1091564024/photo/peanuts.jpg?s=612x612&w=0&k=20&c=DICYqJjlD2mmZjdlzRUG3nz_0SVJFyQhi0W_2z2ro5Y=', priceBefore: '$1340.00', priceNow: '$1190.00(incl. of all taxes)' },
        { id: 6, name: 'Coffee Husks', imgSrc: 'https://media.istockphoto.com/id/1062994848/photo/coffee-cherry-tea-made-from-the-dried-skins-of-dried-berries-of-the-coffee-plant-for.jpg?s=612x612&w=0&k=20&c=r0DiDIoshSfeCnzX2Se3TnQjmdMIkI3zlbe4l7lI2Ho=', priceBefore: '$1450.00', priceNow: '$1200.00(incl. of all taxes)' },
        
        { id: 7, name: 'Coconut Shells', imgSrc: 'https://media.istockphoto.com/id/874969478/photo/coconut-shell-leftover-close-up-photo.jpg?s=612x612&w=0&k=20&c=9vfy2Cw3WBNVLUHsFaBcaZUNYVGTcgCf09oxTveYzto=', priceBefore: '$1150.00', priceNow: '$950.00(incl. of all taxes)' },
        { id: 8, name: 'Onion Skins', imgSrc: 'https://media.istockphoto.com/id/1470919488/photo/onions-for-painting-eggs-a-background-of-onion-husks-easter-family-traditions-preparing-for.jpg?s=612x612&w=0&k=20&c=NtVvo5QgwNWsY3CkN10BrRFAVfDLQpSMRxELG0xrt2c=', priceBefore: '$1250.00', priceNow: '$1050.00(incl. of all taxes)' },
        { id: 9, name: 'Cotton Stalks', imgSrc: 'https://media.istockphoto.com/id/179559323/photo/cotton-in-field-ready-for-harvest.jpg?s=612x612&w=0&k=20&c=kHC3DwupkRQJIjb3UW3tMu9WrmpyQvsnZu70cP0n5A8=', priceBefore: '$1350.00', priceNow: '$1150.00(incl. of all taxes)' },
        { id: 10, name: 'Cocoa Pod Husks', imgSrc: 'https://media.istockphoto.com/id/2155778705/photo/discarded-cacao-shells-on-a-farm.jpg?s=612x612&w=0&k=20&c=nMvNIufMkKgD9RjO68vaIgdKuX6gpSNLwLTgkiOaci0=', priceBefore: '$1450.00', priceNow: '$1250.00(incl. of all taxes)' },
        { id: 11, name: 'Oil Palm Waste', imgSrc: 'https://media.istockphoto.com/id/2162039804/photo/oil-palm-waste-in-kalimantan-plantations-is-turned-into-organic-fertilizer.jpg?s=612x612&w=0&k=20&c=MNGjl7hAYqa9j0SLavfsnkO4jKwP_20hTrPlwZU5pbw=', priceBefore: '$1550.00', priceNow: '$1350.00(incl. of all taxes)' },
        { id: 12, name: 'Chicken Manure', imgSrc: 'https://media.istockphoto.com/id/1222751574/photo/gardener-adding-chicken-manure-pellets-to-soil-ground-for-planting-in-garden.jpg?s=612x612&w=0&k=20&c=15sJ09pkbRwbErfNH6rYVnJD5nQBmYjww-fC5wvfuSY=', priceBefore: '$1650.00', priceNow: '$1450.00(incl. of all taxes)' }
    ];

    useEffect(() => {
        // Load liked products from local storage on initial render
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(savedLikedProducts);
        
        // Load cart products from local storage on initial render
        const savedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
        setCartProducts(savedCartProducts);
    }, []);

    useEffect(() => {
        
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    }, [likedProducts]);

    useEffect(() => {
        
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    }, [cartProducts]);

    const handleLikeToggle = (productId) => {
        setLikedProducts(prevLiked => 
            prevLiked.includes(productId) 
                ? prevLiked.filter(id => id !== productId) 
                : [...prevLiked, productId]
        );
    };

    const handleAddToCart = (product) => {
        setCartProducts(prevCart => {
            const existingProduct = prevCart.find(p => p.id === product.id);
            if (existingProduct) {
                return prevCart.map(p =>
                    p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className="shop-component">
            <main className="main">
                <div className="center-paragraph">
                    <p style={{ color: "black", fontSize: "30px", fontWeight: "bold" }}>
                        Products
                    </p>
                </div>
                <div className="top-icons">
                    <Link to="/Cart" className="icon-link">
                        <RiShoppingCartFill className="nav-icon" />
                        {cartProducts.length > 0 && (
                            <span className={`notification-badge cart-badge`}>{cartProducts.length}</span>
                        )}
                    </Link>
                    <Link to="/LikedProducts" className="icon-link">
                        <TbHeart className="nav-icon" />
                        {likedProducts.length > 0 && (
                            <span className={`notification-badge liked-badge`}>{likedProducts.length}</span>
                        )}
                    </Link>
                </div>

                <div className="bd-grid">
                    {products.map((product) => (
                        <article key={product.id} className="shop-card">
                            <div className="shop-card__img">
                                <img src={product.imgSrc} alt={product.name} />
                            </div>
                            <div className="shop-card__name">
                                <p>{product.name}</p>
                            </div>
                            <div className="shop-card__precis">
                                <a
                                    href="#"
                                    className="shop-card__icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLikeToggle(product.id);
                                    }}
                                >
                                    {likedProducts.includes(product.id) ? (
                                        <IoHeart style={{ color: "darkgreen" }} />
                                    ) : (
                                        <IoHeartOutline />
                                    )}
                                </a>
                                <div>
                                    <span className="shop-card__preci shop-card__preci--before">{product.priceBefore}</span>
                                    <span className="shop-card__preci shop-card__preci--now">{product.priceNow}</span>
                                </div>
                                <a
                                    href="#"
                                    className="shop-card__icon"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(product);
                                    }}
                                >
                                    <IoCartOutline />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Shop;
