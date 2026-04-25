import { useState } from 'react';
import '../styles/DishGallery.css';

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
}

export default function DishGallery() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  // Sample dishes - replace image paths with your actual dish images
  const dishes: Dish[] = [
    {
      id: 1,
      name: 'Mutton Curry',
      description: 'Slow-cooked mutton in a rich, classic curry sauce — Zaika\'s most beloved dish',
      image: '/images/dishes/mutton-curry.jpg',
      price: '¥885'
    },
    {
      id: 2,
      name: 'Paneer Makhani',
      description: 'House-made paneer in a velvety tomato-cream sauce, perfectly spiced',
      image: '/images/dishes/paneer-makhani.jpg',
      price: '¥890'
    },
    {
      id: 3,
      name: 'Sag Mutton',
      description: 'Tender mutton simmered in a vibrant, nutrient-rich spinach curry',
      image: '/images/dishes/sag-mutton.jpg',
      price: '¥930'
    },
    {
      id: 4,
      name: 'Dal Curry',
      description: 'Four-lentil slow-simmered curry — a Himalayan comfort food staple',
      image: '/images/dishes/dal-curry.jpg',
      price: '¥730'
    },
    {
      id: 5,
      name: 'Mutton Masala',
      description: 'Mutton cooked with an abundance of aromatic whole spices, bold and fragrant',
      image: '/images/dishes/mutton-masala.jpg',
      price: '¥940'
    },
    {
      id: 6,
      name: 'Sag Paneer',
      description: 'Creamy spinach curry with house-made paneer cheese — a vegetarian favourite',
      image: '/images/dishes/sag-paneer.jpg',
      price: '¥880'
    }
  ];

  return (
    <section id="gallery" className="dish-gallery">
      <div className="gallery-bg"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Signature Collection</span>
          <h2>Crafted with <span>Passion</span></h2>
          <p className="section-subtitle">
            Dishes crafted from century-old Nepali recipes with Tokyo's meticulous attention to detail
          </p>
        </div>

        <div className="dishes-grid">
          {dishes.map(dish => (
            <div
              key={dish.id}
              className="dish-card"
              onClick={() => setSelectedDish(dish)}
            >
              <div className="dish-image-container">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <div className="dish-overlay">
                  <button className="view-btn">View Details</button>
                </div>
              </div>
              <div className="dish-info">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div className="dish-footer">
                  <span className="price">{dish.price}</span>
                  <span className="dish-tag">Chef's Pick</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDish && (
        <div className="modal" onClick={() => setSelectedDish(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedDish.image} alt={selectedDish.name} />
            <button 
              className="close-btn" 
              onClick={() => setSelectedDish(null)}
            >
              ✕
            </button>
            <div className="modal-body">
              <h3>{selectedDish.name}</h3>
              <p>{selectedDish.description}</p>
              <p className="modal-price">{selectedDish.price}</p>
              <button className="order-btn">Add to Order</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
