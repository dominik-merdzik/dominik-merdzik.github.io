import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; MMXXIV</p>
      <p className="made-by">Made with ❤️ by Dominik Merdzik<br/>Toronto, Canada.</p>
      <div className="footer-links">
        <a href="https://github.com/"> GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
