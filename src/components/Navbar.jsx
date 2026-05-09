import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img 
            src="/images/logo.png"
            alt="YungMora Logo" 
            style={{ 
              height: '55px', 
              width: 'auto',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #ff00aa'
            }}
          />
        </Link>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/music" className={location.pathname === '/music' ? 'active' : ''}>Music</Link></li>
        <li><Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link></li>
        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
      </ul>

      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;