import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__cta-block">
          <h2 className="footer__cta-heading display">
            LET'S CREATE<br />SOMETHING<br /><span>GREAT.</span>
          </h2>
          <a href="/contact" className="footer__cta-btn">
            Start a Project <span>→</span>
          </a>
        </div>
        <div className="footer__links-grid">
          <div className="footer__col">
            <span className="footer__col-title">Navigation</span>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/works">Works</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Services</span>
            <a href="/works">Branding</a>
            <a href="/works">Art Direction</a>
            <a href="/works">Motion Design</a>
            <a href="/works">UI/UX Design</a>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Connect</span>
            <a href="#">Instagram</a>
            <a href="#">Behance</a>
            <a href="#">Dribbble</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__logo display">LUMAXIS</span>
        <span className="footer__copy">© 2025 Lumaxis. All rights reserved.</span>
        <span className="footer__tagline">Design Studio '25</span>
      </div>
    </footer>
  );
}
