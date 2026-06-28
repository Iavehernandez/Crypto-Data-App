import React, { useState } from 'react';
import { HeaderStyle } from './styles';
import SearchBar from '../SearchBar/SearchBar';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderStyle>
      <div className="title-container">
        <img
          src="https://cdn-icons-png.flaticon.com/256/7016/7016537.png"
          alt="logo"
        />
        <div>
          <h1>Crypto Data</h1>
          <p>Bienvenido a Crypto Data</p>
        </div>
      </div>

    
      <div className="desktop-layout">
        <nav>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
          <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</Link>
          <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>Portafolio</Link>
        </nav>
        <SearchBar />
      </div>

        <div className="icons">
        <span className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </span>
      </div>


      <nav className={`mobile-nav ${menuOpen ? "open" : "close"}`}>
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>Inicio</Link>
        <Link to="/dashboard" className={location.pathname === "/dashboard" ? "active" : ""}>Dashboard</Link>
        <Link to="/portfolio" className={location.pathname === "/portfolio" ? "active" : ""}>Portafolio</Link>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
