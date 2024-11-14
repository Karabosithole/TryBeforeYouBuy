const express = require('express');
const app = express();
app.use(express.json());

// Endpoint to save user measurements
app.post('/api/measurements', (req, res) => {
    const { userId, measurements } = req.body;
    // Save measurements to a database
    res.send('Measurements saved');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
