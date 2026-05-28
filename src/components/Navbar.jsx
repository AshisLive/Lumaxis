import './Navbar.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Works', path: '/works' },
    { label: 'Contact', path: '/contact' },
  ];
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">LUMA<span>X</span>IS</Link>
      <div className="navbar__links">
        {links.map(l => (
          <Link
            key={l.path}
            to={l.path}
            onClick={() => setActive(l.path)}
            className={`navbar__link ${(active === l.path || location.pathname === l.path) ? 'navbar__link--active' : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <Link to="/contact" className="navbar__cta">
        Chat With Us
        <span className="navbar__cta-arrow">→</span>
      </Link>
    </nav>
  );
}
