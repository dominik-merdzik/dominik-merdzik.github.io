import React from 'react';
import './Footer.css'; // Assuming you'll style the footer separately

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; MMXXIV | Made with ❤️ by Dominik Merdzik | Toronto, Canada. </p>
      <div className="footer-links">
        <a href="https://github.com/"> GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
