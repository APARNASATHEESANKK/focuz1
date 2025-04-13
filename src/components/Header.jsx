import React from 'react';
import './Header.css';
import logo from '../assets/img3.png';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src={logo} 
          className="logo-img" 
          alt="Company Logo" 
        />
      </div>
     
      <div className="nav-links">
        <a href="#about">About us</a>
        <a href="#services">Services</a>
        <a href="#stories">Stories</a>
        <button className='co' href="#contact">Contact</button>
      </div>
      
    
      <button className="mobile-menu-button">
        <span className="menu-icon">☰</span>
      </button>
    </nav>
  );
};

export default Header;