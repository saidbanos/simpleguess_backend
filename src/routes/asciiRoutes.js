// src/routes/asciiRoutes.js

const express = require('express');
const asciiController = require('../controllers/asciiController');
const router = express.Router();

router.post('/generate', asciiController.generateAsciiArt);

module.exports = router;
