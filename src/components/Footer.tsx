import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-gradient"></div>
      
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <h3>ZAIKA</h3>
            <p>THE TASTE OF HIMALAYA</p>
          </div>
          <p className="footer-desc">
            We serve smiles, joy and the best flavours in town ♡<br />
            Come hungry, leave happy 🙏
          </p>
          <div className="cultural-note">
            🏔️ Nepal's heart | 🗾 Japan's spirit
          </div>
        </div>

        <div className="footer-section">
          <h4>Hours 営業時間</h4>
          <ul>
            <li>🍱 Lunch: 11:00 – 15:00</li>
            <li>🍽️ Dinner: 17:00 – 22:00</li>
          </ul>
          <div className="delivery-note">
            <p>📦 Delivery available via:</p>
            <p>Uber Eats · 出前館 (Demae-can)</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact & Location</h4>
          <ul>
            <li>📍 〒175-0083 東京都板橋区徳丸3-1-18-2F</li>
            <li>📞 03-6317-0037</li>
            <li>📱 080-7620-4138</li>
            <li>✉️ niuresangita48@gmail.com</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.instagram.com/zaika_restro_/" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61571199847877" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          </div>
          <div className="payment-methods">
            <p>💳 Card &nbsp;·&nbsp; 📱 PayPay &nbsp;·&nbsp; Alipay</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zaika · The Taste of Himalaya · Itabashi, Tokyo</p>
      </div>
    </footer>
  );
}
