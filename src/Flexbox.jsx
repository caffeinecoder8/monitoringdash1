import React, { useState, useEffect } from 'react';
import './Flexbox.css';

const Flexbox = () => {
  const [statusMessage, setStatusMessage] = useState('');
  const [statusColor, setStatusColor] = useState('grey'); // Default color

  useEffect(() => {
    // Simulate API call
    const fetchStatus = async () => {
      // Replace this with your actual API call
      const response = await fakeApiCall();

      // Assuming response.status contains the status code
      if (response.status === 1) {
        setStatusMessage('All systems operational');
        setStatusColor('green');
      } else if (response.status === 0) {
        setStatusMessage('System needs attention');
        setStatusColor('red');
      }
    };

    fetchStatus();
  }, []);

  // Simulated API call function (to be replaced with actual API call)
  const fakeApiCall = async () => {
    // Simulate API response
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ status: 1 }); // Change this to 0 to test the other condition
      }, 1000);
    });
  };

  return (
    <div className="flex-container">
      <div className="flex-item">
        <div className="status-indicator" style={{ backgroundColor: statusColor }}></div>
         Juniper Networks
      </div>
      <div className="status-message">
        {statusMessage}
      </div>
    </div>
  );
}

export default Flexbox;
