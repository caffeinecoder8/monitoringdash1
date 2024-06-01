import React, { useState, useEffect } from 'react';

const FetchIPInter = ({ onIpFetched }) => {
  useEffect(() => {
    const fetchPublicIp = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        onIpFetched(data.ip);
      } catch (error) {
        console.error('Error fetching public IP:', error);
      }
    };

    fetchPublicIp();

    return () => {};
  }, [onIpFetched]);

  return null; // This component doesn't render anything
};

export default FetchIPInter;
