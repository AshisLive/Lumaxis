import './Hero.css';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background spotlight */}
      <div className="hero__spotlight" />
      <div className="hero__spotlight hero__spotlight--2" />

      {/* Big BG year */}
      <div className="hero__bg-year">2025</div>

      {/* Top-left tag */}
      <div className="hero__tag">Design St '25</div>

      {/* Left: Big Heading */}
      <div className="hero__left">
        <h1 className="hero__heading display">AGENCIA</h1>
      </div>

      {/* Center: Phone mockup */}
      <div className="hero__center">
        <div className="hero__phone">
          <div className="hero__phone-screen">
            <div className="hero__phone-img-wrap">
              <div className="hero__phone-img-overlay" />
              <div className="hero__phone-face" />
            </div>
            <div className="hero__phone-content">
              <div className="hero__phone-label">Prelexity <sup>[02]</sup></div>
              <p className="hero__phone-sub">Growth your brand with our SEO/ Marketing and advertisment solutions. Help increase</p>
              <div className="hero__phone-btn">
                Chat With Us <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Services list */}
      <div className="hero__right">
        <span className="hero__right-tag">/we do</span>
        <ul className="hero__services">
          <li className="hero__service hero__service--active">BRANDING</li>
          <li className="hero__service">ART DIRECTION</li>
          <li className="hero__service">MOTION</li>
        </ul>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
