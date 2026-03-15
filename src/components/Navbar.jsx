import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Membership', path: '/membership' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner container-wide">
          <Link to="/" className="navbar-logo">
            FORGE<span className="logo-haus">HAUS</span>
          </Link>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <Link to="/contact" className="navbar-cta">
            Start Training
          </Link>

          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <button
          className="mobile-drawer-close"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="mobile-drawer-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`mobile-drawer-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="mobile-drawer-cta">
            Start Training
          </Link>
        </div>
      </div>
      {mobileOpen && <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
};

export default Navbar;
