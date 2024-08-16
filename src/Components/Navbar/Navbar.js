import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css'; 

const Navbar = () => {
  const [show, setShow] = useState(false);  // Initially set to false to hide on load
  const lastScrollY = useRef(window.scrollY); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShow(false); 
      } else {
        setShow(true);
      }
      lastScrollY.current = window.scrollY; 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  const handleNavLinkClick = (e, sectionId) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${show ? 'show' : 'hide'}`}>
      <ul>
        <li><a href="#home" onClick={(e) => handleNavLinkClick(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>About</a></li>
        <li><a href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
