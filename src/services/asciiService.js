// src/services/asciiService.js

const Art = require('ascii-art');

// Configure ascii-art
Art.fontPath = 'Fonts'; // Set the path for font files if you're using Art.font()
Art.Image.fontPath = 'Fonts'; // Specifically for images

// Function to convert an image URL to ASCII art
const convertToAscii = (imageUrl) => {
  return new Promise((resolve, reject) => {
    new Art.Image({
      filepath: imageUrl,
      alphabet: 'variant4', // You can experiment with different alphabets
      width: 100, // Adjust the width as needed
      height: 50  // Adjust the height as needed
    }).render((err, rendered) => {
      if (err) reject(err);
      else resolve(rendered);
    });
  });
};

module.exports = { convertToAscii };
