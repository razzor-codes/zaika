import { useState } from 'react';
import '../styles/DishGallery.css';

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  price: string;
  spice: string;
  tag: string;
}

export default function DishGallery() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  const dishes: Dish[] = [
    {
      id: 1,
      name: 'Mutton Curry',
      description: 'Slow-cooked mutton in a rich, classic curry sauce — Zaika\'s most beloved dish',
      image: '/images/dishes/mutton-curry.jpg',
      price: '¥885',
      spice: 'Comforting spice',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Paneer Makhani',
      description: 'House-made paneer in a velvety tomato-cream sauce, perfectly spiced',
      image: '/images/dishes/paneer-makhani.jpg',
      price: '¥890',
      spice: 'Creamy mild',
      tag: 'Vegetarian'
    },
    {
      id: 3,
      name: 'Sag Mutton',
      description: 'Tender mutton simmered in a vibrant, nutrient-rich spinach curry',
      image: '/images/dishes/sag-mutton.jpg',
      price: '¥930',
      spice: 'Deep savoury',
      tag: 'House Favourite'
    },
    {
      id: 4,
      name: 'Dal Curry',
      description: 'Four-lentil slow-simmered curry — a Himalayan comfort food staple',
      image: '/images/dishes/dal-curry.jpg',
      price: '¥730',
      spice: 'Gentle warmth',
      tag: 'Daily Comfort'
    },
    {
      id: 5,
      name: 'Mutton Masala',
      description: 'Mutton cooked with an abundance of aromatic whole spices, bold and fragrant',
      image: '/images/dishes/mutton-masala.jpg',
      price: '¥940',
      spice: 'Bold spice',
      tag: 'Chef Signature'
    },
    {
      id: 6,
      name: 'Sag Paneer',
      description: 'Creamy spinach curry with house-made paneer cheese — a vegetarian favourite',
      image: '/images/dishes/sag-paneer.jpg',
      price: '¥880',
      spice: 'Fresh & mellow',
      tag: 'Vegetarian'
    }
  ];

  const featuredDish = dishes[4];

  return (
    <section id="gallery" className="dish-gallery">
      <div className="gallery-bg"></div>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Signature Collection</span>
          <h2>Crafted with <span>Passion</span></h2>
          <p className="section-subtitle">
            Dishes crafted from century-old Nepali recipes with Tokyo's meticulous attention to detail.
          </p>
        </div>

        <div className="signature-spotlight">
          <div className="spotlight-copy">
            <span className="spotlight-tag">Most Recommended</span>
            <h3>{featuredDish.name}</h3>
            <p>
              Rich mutton, roasted spice, and slow-simmered depth. This is the plate guests remember
              when they talk about Zaika.
            </p>
            <div className="spotlight-metrics">
              <div>
                <strong>Slow-cooked</strong>
                <span>Layered spice and tender finish</span>
              </div>
              <div>
                <strong>{featuredDish.price}</strong>
                <span>Premium curry selection</span>
              </div>
            </div>
            <button className="spotlight-button" onClick={() => setSelectedDish(featuredDish)}>
              Explore Signature Dish
            </button>
          </div>
          <button className="spotlight-visual" onClick={() => setSelectedDish(featuredDish)}>
            <img src={featuredDish.image} alt={featuredDish.name} className="spotlight-image" />
            <span className="spotlight-badge">{featuredDish.tag}</span>
          </button>
        </div>

        <div className="dishes-grid">
          {dishes.map(dish => (
            <button
              key={dish.id}
              className="dish-card"
              onClick={() => setSelectedDish(dish)}
            >
              <div className="dish-image-container">
                <img src={dish.image} alt={dish.name} className="dish-image" />
                <div className="dish-overlay">
                  <span className="view-btn">View Details</span>
                </div>
              </div>
              <div className="dish-info">
                <div className="dish-topline">
                  <span className="dish-tag">{dish.tag}</span>
                  <span className="dish-spice">{dish.spice}</span>
                </div>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <div className="dish-footer">
                  <span className="price">{dish.price}</span>
                  <span className="dish-arrow">Discover →</span>
                </div>
              </div>
            </button>
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
              <div className="dish-topline">
                <span className="dish-tag">{selectedDish.tag}</span>
                <span className="dish-spice">{selectedDish.spice}</span>
              </div>
              <h3>{selectedDish.name}</h3>
              <p>{selectedDish.description}</p>
              <p className="modal-price">{selectedDish.price}</p>
              <a className="order-btn" href="tel:0363170037">Call to Reserve</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
