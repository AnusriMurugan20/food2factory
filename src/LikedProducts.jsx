import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './likedProducts.css'; // Ensure this CSS file styles the LikedProducts component

const LikedProducts = () => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const savedLikedProducts = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(savedLikedProducts);
    }, []);

    const handleRemove = (productId) => {
        const updatedLikedProducts = likedProducts.filter(id => id !== productId);
        setLikedProducts(updatedLikedProducts);
        localStorage.setItem('likedProducts', JSON.stringify(updatedLikedProducts));
    };

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

    const likedProductDetails = products.filter(product => likedProducts.includes(product.id));

    return (
        <div className="liked-products-container">
            <h2>Liked Products</h2>
            <div className="liked-products-grid">
                {likedProductDetails.map((product) => (
                    <div key={product.id} className="liked-product-card">
                        <img src={product.imgSrc} alt={product.name} className="liked-product-image" />
                        <div className="liked-product-info">
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <button onClick={() => handleRemove(product.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            {likedProductDetails.length === 0 && <p>No liked products found.</p>}
            
        </div>
    );
};

export default LikedProducts;
