const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Fashion Fit Simulator Backend');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
