// src/Navbar.js
import React from 'react';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center', // Updated to center align items
    padding: '9px 20px',
    backgroundColor: '#1F2937',
    color: '#fff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Smoother sans-serif font
  };

  const navLinksStyle = {
    display: 'flex',
    listStyleType: 'none',
  };

  const navLinkStyle = {
    marginLeft: '20px',
    textDecoration: 'none',
    color: '#fff',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Smoother sans-serif font
  };

  const buttonStyle = {
    padding: '10px 20px', // Adjust padding to match Bootstrap button size
    backgroundColor: '#fff', // Cream color background
    color: '#333', // Text color
    border: 'none', // No border
    borderRadius: '10px', // Slightly rounded edges
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontSize: '18px', // Increased font size
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', // Smoother sans-serif font
  };

  return (
    <nav style={navStyle}>
      <div className="logo">
        <img src="https://media.licdn.com/dms/image/C4D0BAQF9pMSfqlPNOA/company-logo_200_200/0/1630455738117/optaiot_logo?e=2147483647&v=beta&t=GjTqTUstzlqFCYv2pY8eokH9LYBoEAx_daY1D4Rlhrk" alt="MyLogo" style={{ height: '50px', marginRight: '10px' }} />
      </div>
      <ul style={navLinksStyle}>
        <li><a href="#" style={navLinkStyle}>Home</a></li>
        <li><a href="#" style={navLinkStyle}>Actions</a></li>
        <li><a href="#" style={navLinkStyle}>Incidents/Reports</a></li>
        <li><a href="#" style={navLinkStyle}>Contact</a></li>
      </ul>
      <button style={buttonStyle}>-> Enter</button>
    </nav>
  );
};

export default Navbar;
