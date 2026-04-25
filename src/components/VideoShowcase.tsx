import '../styles/VideoShowcase.css';

export default function VideoShowcase() {
  return (
    <section className="video-showcase">

      {/* ── LEFT: text panel ── */}
      <div className="video-text-panel">
        <span className="video-tag">Inside Zaika</span>
        <h2 className="video-title">
          An Experience<br />
          <em>Beyond the Plate</em>
        </h2>
        <p className="video-subtitle">
          Step into our warm, welcoming space in Itabashi, Tokyo — where every
          seat tells a story and every meal becomes a memory.
        </p>
        <div className="video-stats">
          <div className="vstat">
            <span className="vstat-num">Lunch</span>
            <span className="vstat-label">11:00 – 15:00</span>
          </div>
          <div className="vstat-divider" />
          <div className="vstat">
            <span className="vstat-num">Dinner</span>
            <span className="vstat-label">17:00 – 22:00</span>
          </div>
          <div className="vstat-divider" />
          <div className="vstat">
            <span className="vstat-num">Dine-in</span>
            <span className="vstat-label">& Delivery</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT: video panel ── */}
      <div className="video-panel">
        <video
          className="showcase-video"
          src={`${import.meta.env.BASE_URL}videos/dining.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-panel-fade" />
      </div>

    </section>
  );
}
