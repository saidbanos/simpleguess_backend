// app.js

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import your route definitions
const asciiRoutes = require('./routes/asciiRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors()); // Enable CORS if your frontend is on a different origin
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Support URL-encoded bodies

// Use your routes
app.use('/api/ascii', asciiRoutes);

// A simple route for testing your app's availability
app.get('/', (req, res) => {
  res.send('The ASCII Art Generator Backend is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
