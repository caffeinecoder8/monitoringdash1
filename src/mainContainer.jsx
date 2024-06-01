import React from 'react';
import './mainContainer.css';

const Card = ({ imageUrl, param1, param2, buttonText, groupAssetStatus }) => {
  const statusColor = groupAssetStatus ? '#00FF00' : '#FF0000'; // Green for 1, Red for 0

  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" className="card-image" />
      <div className="card-content">
        <h3>{param1}</h3>
        <p>{param2}</p>
      </div>
      <button className="card-button">{buttonText}</button>
      <div className="status-indicator" style={{ backgroundColor: statusColor }}></div> {/* Status indicator */}
    </div>
  );
};

const Cards = () => {
  const cardCount = 4; // Set the initial number of cards here

  // Array of names to be used in param1 for each card
  const names = ['Chillers', 'Pumps', 'Tanks', 'Valves'];

  // Function to generate card data based on card count
  const generateCardData = (count) => {
    const baseData = {
      imageUrl: 'https://via.placeholder.com/100',
      param2: 'Items Warning ⚠ :',
      buttonText: 'Status',
    };

    return Array.from({ length: count }, (_, index) => ({
      ...baseData,
      param1: names[index % names.length], // Cycle through names array
      param2: `${baseData.param2} ${index + 1}`,
      groupAssetStatus: index % 2 === 0 ? 1 : 0, // Green for even, Red for odd
    }));
  };

  const cardData = generateCardData(cardCount);

  return (
    <div className="cards-container"> {/* Enclosed container for cards */}
      <div className="card-container">
        {cardData.map((data, index) => (
          <Card
            key={index}
            imageUrl={data.imageUrl}
            param1={data.param1}
            param2={data.param2}
            buttonText={data.buttonText}
            groupAssetStatus={data.groupAssetStatus}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
