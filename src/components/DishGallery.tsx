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
  const dishImagePath = (fileName: string) => `${import.meta.env.BASE_URL}images/dishes/${fileName}`;

  const dishes: Dish[] = [
    {
      id: 1,
      name: 'Mutton Curry',
      description: 'Slow-cooked mutton in a rich, classic curry sauce — Zaika\'s most beloved dish',
      image: dishImagePath('mutton_curry.jpg'),
      price: '¥885',
      spice: 'Comforting spice',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Paneer Makhani',
      description: 'House-made paneer in a velvety tomato-cream sauce, perfectly spiced',
      image: dishImagePath('paneer_makhani.jpg'),
      price: '¥890',
      spice: 'Creamy mild',
      tag: 'Vegetarian'
    },
    {
      id: 3,
      name: 'Sag Mutton',
      description: 'Tender mutton simmered in a vibrant, nutrient-rich spinach curry',
      image: dishImagePath('sag_mutton.jpg'),
      price: '¥930',
      spice: 'Deep savoury',
      tag: 'House Favourite'
    },
    {
      id: 4,
      name: 'Butter Chicken Curry',
      description: 'Creamy tomato-butter curry with tender chicken and a silky finish',
      image: dishImagePath('butter_chicken_curry.jpg'),
      price: '¥900',
      spice: 'Creamy rich',
      tag: 'Signature'
    },
    {
      id: 5,
      name: 'Mutton Masala',
      description: 'Mutton cooked with an abundance of aromatic whole spices, bold and fragrant',
      image: dishImagePath('mutton_masala.jpg'),
      price: '¥940',
      spice: 'Bold spice',
      tag: 'Chef Signature'
    },
    {
      id: 6,
      name: 'Tandoori Chicken',
      description: 'Charred tandoori chicken, smoky and juicy with bold spice marinade',
      image: dishImagePath('tandoori_chicken.jpg'),
      price: '¥730',
      spice: 'Smoky heat',
      tag: 'From Tandoor'
    },
    {
      id: 7,
      name: 'Chicken Tikka',
      description: 'Juicy grilled chicken tikka with crisp char and aromatic spice',
      image: dishImagePath('chicken_tikka.jpg'),
      price: '¥430',
      spice: 'Grilled spice',
      tag: 'Popular'
    },
    {
      id: 8,
      name: 'Mutton Chilli',
      description: 'Spicy stir-fried mutton with peppers and a punchy masala finish',
      image: dishImagePath('mutton_chilli.jpg'),
      price: '¥940',
      spice: 'Spicy kick',
      tag: 'Hot Favourite'
    },
    {
      id: 9,
      name: 'Chicken Curry',
      description: 'Classic chicken curry in a flavorful house gravy',
      image: dishImagePath('chicken_curry.jpg'),
      price: '¥760',
      spice: 'Balanced',
      tag: 'Classic'
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
