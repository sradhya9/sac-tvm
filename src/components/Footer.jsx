import { Home, Calendar, Trophy, Utensils, PlusCircle, Users, Briefcase, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer-nav">
        <Link to="/" className="footer-link">
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link to="/about" className="footer-link">
          <Calendar size={24} />
          <span>About</span>
        </Link>
        <Link to="/schedule" className="footer-link">
          <Trophy size={24} />
          <span>Schedule</span>
        </Link>
        <Link to="/tracks" className="footer-link">
          <Briefcase size={24} />
          <span>Tracks</span>
        </Link>
        <Link to="/sponsors" className="footer-link">
          <Users size={24} />
          <span>Sponsors</span>
        </Link>
        <Link to="/contact" className="footer-link">
          <Music size={24} />
          <span>Contact</span>
        </Link>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 CSI Trivandrum Chapter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
