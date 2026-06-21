import '../styles/Hero.css';

export default function Hero() {
  const heroDishImage = `${import.meta.env.BASE_URL}images/dishes/mutton_masala.jpg`;

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
          <div className="hero-highlights">
            <span>Signature curries</span>
            <span>Family-friendly dining</span>
            <span>Delivery available</span>
          </div>
          <div className="hero-actions">
            <a className="cta-button" href="tel:0363170037">Reserve Your Table</a>
            <a className="cta-secondary" href="#menu">View Menu →</a>
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
              <div
                className="hero-card-img"
                style={{
                  backgroundImage: `linear-gradient(180deg, transparent 48%, rgba(20, 10, 4, 0.6) 100%), url(${heroDishImage})`
                }}
              ></div>
              <div className="hero-card-body">
                <div className="hero-card-eyebrow">Chef's Signature</div>
                <h4>Mutton Masala</h4>
                <p>Slow-cooked with bold Himalayan spices and finished with a deep aromatic gravy.</p>
                <div className="hero-card-meta">
                  <span>Tokyo favourite</span>
                  <span className="hero-card-price">¥940</span>
                </div>
              </div>
            </div>
            <div className="hero-floating-card hero-floating-card-review">
              <strong>4.9★ guest love</strong>
              <span>Warm service, comforting curries, memorable spice.</span>
            </div>
            <div className="hero-floating-card hero-floating-card-service">
              <strong>Lunch set from ¥750</strong>
              <span>Fast weekday dining and relaxed dinner service.</span>
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
