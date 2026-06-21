import { useState } from 'react';
import '../styles/Menu.css';

interface MenuEntry {
  name: string;
  nameJa: string;
  description: string;
  price: string;
}

interface MenuItem {
  category: string;
  label: string;
  summary: string;
  items: MenuEntry[];
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('curry');

  const menuItems: MenuItem[] = [
    {
      category: 'curry',
      label: 'Curry カレー',
      summary: 'Slow-simmered classics with layered Himalayan spice.',
      items: [
        { name: 'Mutton Curry', nameJa: 'マトンカレー', description: 'Slow-cooked mutton in a rich, classic Indian curry sauce', price: '¥885' },
        { name: 'Sag Mutton', nameJa: 'ほうれん草マトン', description: 'Tender mutton in a vibrant spinach-based curry', price: '¥930' },
        { name: 'Mutton Masala', nameJa: 'マトンマサラ', description: 'Mutton cooked with an abundance of aromatic Himalayan spices', price: '¥940' },
        { name: 'Mutton Chilli', nameJa: 'マトンチリ', description: 'Mutton stir-fried with onions, green peppers and bold spices', price: '¥940' },
        { name: 'Mix Vegetable', nameJa: 'ミックス野菜', description: 'Seasonal vegetables in a healthy, flavourful spiced curry', price: '¥790' },
        { name: 'Dal Curry', nameJa: 'ダルカレー', description: 'Four-lentil curry, slow-simmered with fragrant spices', price: '¥730' },
        { name: 'Sag Paneer', nameJa: 'ほうれん草パニール', description: 'Spinach and house-made paneer cheese curry', price: '¥880' },
        { name: 'Alu Gobi', nameJa: 'アルゴービ', description: 'Cauliflower and potato curry with warming spices', price: '¥810' },
        { name: 'Paneer Makhani', nameJa: 'パニールマカニ', description: 'House-made paneer in a rich tomato-cream curry sauce', price: '¥890' }
      ]
    },
    {
      category: 'lunch',
      label: 'Lunch ランチ',
      summary: 'Weekday-friendly sets that make lunch easy and satisfying.',
      items: [
        { name: "Today's Curry Set", nameJa: '日替わりカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥750' },
        { name: 'Chicken Curry Set', nameJa: 'チキンカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥750' },
        { name: 'Vegetable Curry Set', nameJa: 'ベジタブルカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥800' },
        { name: 'Dal Curry Set', nameJa: 'ダルカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥750' },
        { name: 'Keema Curry Set', nameJa: 'キーマカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥850' },
        { name: 'Butter Chicken Set', nameJa: 'バターチキンカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥900' },
        { name: 'Mutton Curry Set', nameJa: 'マトン（羊肉）カレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥850' },
        { name: 'Sag Chicken Set', nameJa: 'ほうれん草チキン', description: '1 curry + naan or rice + salad + soft drink', price: '¥850' },
        { name: 'Seafood Curry Set', nameJa: 'シーフードカレー', description: '1 curry + naan or rice + salad + soft drink', price: '¥850' },
        { name: '2 Curry Set', nameJa: '2種類カレーセット', description: '2 curries of your choice + naan or rice + salad + soft drink', price: '¥1,040' },
        { name: 'Tikka Set', nameJa: 'ティッカセット', description: '2 curries + naan or rice + chicken tikka + soft drink', price: '¥1,190' },
        { name: 'BBQ Set', nameJa: 'バーベキューセット', description: '2 curries + naan or rice + tandoori chicken + seekh kabab + malai tikka + dessert + soft drink', price: '¥1,550' },
        { name: 'Child Set', nameJa: 'お子様セット', description: 'Mild curry + naan or rice + soft drink + dessert', price: '¥550' }
      ]
    },
    {
      category: 'naan',
      label: 'Naan ナン',
      summary: 'Fresh tandoor breads that complete the table.',
      items: [
        { name: 'Plain Naan', nameJa: 'プレーンナン', description: 'Classic soft leavened bread, baked fresh in our tandoor', price: 'Set incl.' },
        { name: 'Garlic Naan', nameJa: 'ガーリックナン', description: 'Tandoor bread topped with fragrant garlic butter', price: '+¥200' },
        { name: 'Coconut Naan', nameJa: 'ココナッツナン', description: 'Lightly sweet naan filled with coconut — a Zaika favourite', price: '+¥250' },
        { name: 'Cheese Naan', nameJa: 'チーズナン', description: 'Naan stuffed with melted cheese, rich and indulgent', price: '+¥300' }
      ]
    }
  ];

  const activeMenu = menuItems.find((menu) => menu.category === activeCategory);

  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <div className="menu-heading">
          <span className="section-tag">Menu Highlights</span>
          <h2>Our <span>Menu</span></h2>
          <p className="section-subtitle">
            Explore our most-loved curries, flexible lunch sets, and fresh-baked naan.
          </p>
        </div>

        <div className="menu-preview-cards">
          <div className="menu-preview-card">
            <strong>Lunch sets from ¥750</strong>
            <span>Ideal for quick weekday meals without compromising flavour.</span>
          </div>
          <div className="menu-preview-card">
            <strong>Family-friendly portions</strong>
            <span>Comforting classics that work for solo visits or shared tables.</span>
          </div>
          <div className="menu-preview-card">
            <strong>Delivery ready</strong>
            <span>Order Zaika through Uber Eats or Demae-can when you stay in.</span>
          </div>
        </div>

        <div className="menu-categories">
          {menuItems.map(menuCategory => (
            <button
              key={menuCategory.category}
              className={`category-btn ${activeCategory === menuCategory.category ? 'active' : ''}`}
              onClick={() => setActiveCategory(menuCategory.category)}
            >
              {menuCategory.label}
            </button>
          ))}
        </div>

        {activeMenu && (
          <>
            <div className="menu-active-summary">
              <span className="menu-active-label">Currently viewing</span>
              <p>{activeMenu.summary}</p>
            </div>

            <div className="menu-items">
              {activeMenu.items.map((item, index) => (
                <div key={index} className="menu-item">
                  <span className="menu-item-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="menu-item-header">
                    <div>
                      <h4>{item.name}</h4>
                      <span className="menu-item-ja">{item.nameJa}</span>
                    </div>
                    <span className="menu-price">{item.price}</span>
                  </div>
                  <p className="menu-description">{item.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
