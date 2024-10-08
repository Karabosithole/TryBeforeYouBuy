// src/ClothingItem.js
import React from 'react';

const ClothingItem = ({ item, onSelect }) => {
  return (
    <div className="clothing-item" onClick={() => onSelect(item)}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
    </div>
  );
};

export default ClothingItem;
