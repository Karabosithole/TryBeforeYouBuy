import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables for user inputs and clothing items
  const [measurements, setMeasurements] = useState({
    chest: '',
    waist: '',
    hips: '',
  });

  const [selectedItem, setSelectedItem] = useState(null);

  const clothingItems = [
    { id: 1, name: 'T-Shirt', size: 'M', description: 'A comfortable cotton t-shirt.', image: 'path/to/tshirt-image.jpg' },
    { id: 2, name: 'Jeans', size: '32', description: 'Stylish blue jeans.', image: 'path/to/jeans-image.jpg' },
    // Add more clothing items as needed
  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeasurements((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle clothing item selection
  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Try Before You Buy</h1>

        <div className="measurements-form">
          <h2>Enter Your Measurements</h2>
          <label>
            Chest:
            <input
              type="number"
              name="chest"
              value={measurements.chest}
              onChange={handleChange}
              placeholder="Enter your chest measurement"
            />
          </label>
          <label>
            Waist:
            <input
              type="number"
              name="waist"
              value={measurements.waist}
              onChange={handleChange}
              placeholder="Enter your waist measurement"
            />
          </label>
          <label>
            Hips:
            <input
              type="number"
              name="hips"
              value={measurements.hips}
              onChange={handleChange}
              placeholder="Enter your hips measurement"
            />
          </label>
        </div>

        <h2>Select Clothing Item</h2>
        <div className="clothing-items">
          {clothingItems.map((item) => (
            <div key={item.id} className="clothing-item" onClick={() => handleSelectItem(item)}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div className="selected-item">
            <h2>Selected Item: {selectedItem.name}</h2>
            <p>{selectedItem.description}</p>
            {/* Optionally, include further functionality to visualize how the clothing fits */}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
