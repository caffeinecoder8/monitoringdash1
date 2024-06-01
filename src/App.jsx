import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Flexbox from './Flexbox';
import Cards from './mainContainer'; // Import the Cards component

const fetchPublicIp = async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log('Hello console, Public IP:', data.ip);
  } catch (error) {
    console.error('Error fetching public IP:', error);
  }
};

export function App(props) {
  useEffect(() => {
    fetchPublicIp();
  }, []);

  return (
    <div className='App' style={{ height: '100vh', width: '100vw' }}>
      <Navbar />
      <Flexbox />
      <div style={{ padding: '20px', height: 'calc(100vh - 60px)' }}>
        <Cards /> {/* Include the Cards component here */}
        <h1>Site Name : Juniper Networks</h1>
        <p>Shashank Benakatti.</p>
        <p>Available System Status :  </p>
        <Footer />
      </div>
    </div>
  );
}

// Log to console
console.log('Hello console');
