import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const items = [
    { title: 'Coconut Shells', image: 'https://media.istockphoto.com/id/928025532/photo/pile-of-discarded-coconut-husks-background-coconut-shell.jpg?s=612x612&w=0&k=20&c=4fmwWdN2nUAhxAlJXeu3QhJwhZ2sLVCRUaTT4zmPtWQ=' },
    { title: 'Banana Stems',  image: 'https://media.istockphoto.com/id/1452630616/photo/thor-or-white-banana-stem-is-eaten-as-vegetable-in-south-east-asian-countries.jpg?s=612x612&w=0&k=20&c=QNS_2WoFKeUDDGQ2wWxk7JIPAc8MVtECRl2opUk2zD4=' },
    { title: 'Rice Straws',  image: 'https://media.istockphoto.com/id/1081628920/photo/straw-bales-on-paddy-field-in-india.jpg?s=612x612&w=0&k=20&c=7e2dAyyzSo2kk8IrQndUmY20MA_A569SDypN81QOgGo=' },
    { title: 'Sugarcane Bagasse', image: 'https://media.istockphoto.com/id/1281774717/photo/bagasse-that-has-been-squeezed-sugarcane.jpg?s=612x612&w=0&k=20&c=UKhNH83nNMNdI8Kd--WoHorJHJbjjAJkOu2RBD5Fe18=' },
    { title: 'Onion Skins',  image: 'https://media.istockphoto.com/id/1446119502/photo/onion-peels-in-the-home-compost.jpg?s=612x612&w=0&k=20&c=K0Eo_eD07hfpEGjyxgbsUHtnInUBP15xp9HYLmD3kTE=' },
    { title: 'Cotton Stalks',  image: 'https://media.istockphoto.com/id/183945197/photo/cotton-field.jpg?s=612x612&w=0&k=20&c=noiUBcLMOJnYaHA9VOKEHoXhXaCo_vk2T0tvN2DWf8o=' },
    { title: 'Coconut Husks',  image: 'https://media.istockphoto.com/id/523390634/photo/pile-coconut-shell-for-use-as-fuel.jpg?s=612x612&w=0&k=20&c=eb3LrCUPFp48tXN4jRfJnORTz7YjS_nWUumCw7g6tqM=' },
    { title: 'Cocoa Pod Husks',  image: 'https://media.istockphoto.com/id/2155778705/photo/discarded-cacao-shells-on-a-farm.jpg?s=612x612&w=0&k=20&c=nMvNIufMkKgD9RjO68vaIgdKuX6gpSNLwLTgkiOaci0=' },
  ];

  return (
    <div className="gallery">
      <h1>100% Natural Collection</h1>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="gallery-item-overlay">
              <span>{item.title}</span>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
