import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now Open · Lunch 11–15 · Dinner 17–22
          </div>
          <h1 className="hero-title">
            Himalayan Flavors,
            <span className="highlight">Tokyo Soul</span>
          </h1>
          <p className="hero-subtitle">
            Where Nepal's ancient spice traditions meet Japan's refined culinary art.
            A dining experience unlike any other.
          </p>
          <div className="hero-actions">
            <button className="cta-button">Reserve Your Table</button>
            <button className="cta-secondary">View Menu →</button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Signature Dishes</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12yr</div>
              <div className="stat-label">Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">Guest Rating</div>
            </div>
          </div>
        </div>

        <div className="hero-decorative">
          <div className="hero-card-stack">
            <div className="hero-card hero-card-behind"></div>
            <div className="hero-card hero-card-behind2"></div>
            <div className="hero-card hero-card-main">
              <div className="hero-card-img">🍛</div>
              <div className="hero-card-body">
                <h4>Mutton Masala</h4>
                <p>マトンマサラ</p>
                <span className="hero-card-price">¥940</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
