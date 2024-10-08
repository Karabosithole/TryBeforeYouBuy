const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for now
let clothingItems = [];

// Routes
app.get('/', (req, res) => {
  res.send('Fashion Fit Simulator Backend');
});

// Get all clothing items
app.get('/api/clothing', (req, res) => {
  if (clothingItems.length === 0) {
    return res.status(404).json({ message: 'No clothing items found' });
  }
  res.status(200).json(clothingItems);
});

// Add a new clothing item
app.post('/api/clothing', (req, res) => {
  const { name, size, price } = req.body;
  if (!name || !size || !price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newItem = { id: clothingItems.length + 1, name, size, price };
  clothingItems.push(newItem);
  res.status(201).json(newItem);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

