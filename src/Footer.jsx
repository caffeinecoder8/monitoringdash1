// src/Footer.js
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1F2937',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const footerLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div className="footer-content">
        <p>© OptaIOT Private Limited.</p>
        <nav>
          <a href="#" style={footerLinkStyle}>Privacy Policy</a>
          <a href="#" style={footerLinkStyle}>Terms of Service</a>
          <a href="#" style={footerLinkStyle}>Contact Us</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
