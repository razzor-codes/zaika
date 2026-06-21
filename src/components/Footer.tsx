import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-gradient"></div>

      <div className="footer-content">
        <div className="footer-section footer-intro">
          <div className="footer-logo">
            <h3>ZAIKA</h3>
            <p>THE TASTE OF HIMALAYA</p>
          </div>
          <p className="footer-desc">
            Warm Himalayan hospitality, deeply comforting curries, and a local dining room that keeps
            guests coming back.
          </p>
          <div className="footer-actions">
            <a className="footer-primary" href="tel:0363170037">Call to Reserve</a>
            <a className="footer-secondary" href="#menu">Browse Menu</a>
          </div>
          <div className="cultural-note">
            Nepal's heart · Japan's spirit · Itabashi, Tokyo
          </div>
        </div>

        <div className="footer-section">
          <h4>Hours</h4>
          <ul>
            <li>Lunch: 11:00 – 15:00</li>
            <li>Dinner: 17:00 – 22:00</li>
            <li>Delivery: Uber Eats · Demae-can</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact & Location</h4>
          <ul>
            <li>〒175-0083 東京都板橋区徳丸3-1-18-2F</li>
            <li><a href="tel:0363170037">03-6317-0037</a></li>
            <li><a href="tel:08076204138">080-7620-4138</a></li>
            <li><a href="mailto:niuresangita48@gmail.com">niuresangita48@gmail.com</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay Connected</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/zaika_restro_/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61571199847877" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          </div>
          <div className="payment-methods">
            <p>Card · PayPay · Alipay</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zaika · The Taste of Himalaya · Itabashi, Tokyo</p>
      </div>
    </footer>
  );
}
