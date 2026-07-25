import { useState, useEffect } from 'react';
import { Search, MapPin, Radio, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser } = useAuth();
  
  const isAdmin = currentUser?.email === 'admin@symposium.com';

  // Scroll effect listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`floating-navbar container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo & Name */}
        <Link to="/" className="nav-logo">
          <div className="logo-box"></div>
          <span className="logo-text">SYMPOSIUM</span>
        </Link>



        {/* Desktop Links */}
        <div className="nav-actions">
          <Link to="/about" className="nav-link-hover">
            <span>About</span>
          </Link>
          <Link to="/schedule" className="nav-link-hover">
            <span>Schedule</span>
          </Link>
          <Link to="/tracks" className="nav-link-hover">
            <span>Tracks</span>
          </Link>
          <Link to="/sponsors" className="nav-link-hover">
            <span>Sponsors</span>
          </Link>
          {currentUser ? (
            isAdmin ? (
              <Link to="/organizer" className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--dark)', border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                <User size={20} /> Admin Dashboard
              </Link>
            ) : (
              <Link to="/profile" className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--dark)', border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                <User size={20} /> Participant Hub
              </Link>
            )
          ) : (
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <Link to="/login" className="nav-link-hover" style={{ fontWeight: 'bold' }}>
                <span>Login</span>
              </Link>
              <Link to="/register" className="btn-primary" style={{ border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold' }}>
                Register Now
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Menu size={28} />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="mobile-dropdown">
          <Link to="/about" className="nav-location" onClick={() => setIsMobileMenuOpen(false)}>
            <span>About</span>
          </Link>
          <Link to="/schedule" className="nav-location" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Schedule</span>
          </Link>
          <Link to="/tracks" className="nav-location" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Tracks</span>
          </Link>
          <Link to="/sponsors" className="nav-location" onClick={() => setIsMobileMenuOpen(false)}>
            <span>Sponsors</span>
          </Link>
          {currentUser ? (
            isAdmin ? (
              <Link to="/organizer" className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--dark)', border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                <User size={20} /> Admin Dashboard
              </Link>
            ) : (
              <Link to="/profile" className="btn-primary" style={{ backgroundColor: 'var(--accent)', color: 'var(--dark)', border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                <User size={20} /> Participant Hub
              </Link>
            )
          ) : (
            <>
              <Link to="/login" className="btn-secondary" style={{ border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold', justifyContent: 'center', backgroundColor: 'var(--white)', color: 'var(--dark)' }} onClick={() => setIsMobileMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" className="btn-primary" style={{ border: '3px solid var(--dark)', boxShadow: '4px 4px 0 var(--dark)', fontWeight: 'bold', justifyContent: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                Register Now
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
