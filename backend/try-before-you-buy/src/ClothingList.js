// src/ClothingList.js
import React, { useState } from 'react';
import ClothingItem from './ClothingItem';

const ClothingList = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const clothingItems = [
    {
      id: 1,
      name: 'Casual Top',
      description: 'A comfortable and stylish casual top for everyday wear.',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      id: 2,
      name: 'Denim Jeans',
      description: 'Classic denim jeans that fit well and look great.',
      image: 'https://via.placeholder.com/150',
    },
    // Add more items as needed
  ];

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    // Logic to show how it fits can go here
  };

  return (
    <div>
      <h2>Select Clothing Items</h2>
      <div className="clothing-list">
        {clothingItems.map(item => (
          <ClothingItem key={item.id} item={item} onSelect={handleSelectItem} />
        ))}
      </div>
      {selectedItem && (
        <div className="selected-item">
          <h3>You selected: {selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
          {/* Here you can add a section to show how it fits based on user's measurements */}
        </div>
      )}
    </div>
  );
};

export default ClothingList;
