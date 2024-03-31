// src/controllers/asciiController.js
const openaiService = require("../services/openaiService");
const asciiService = require("../services/asciiService");

exports.generateAsciiArt = async (req, res) => {
	try {
		const theme = req.body.theme;
		console.log(`Received theme: ${theme}`);

		// Fetching a theme item (main item for the ASCII conversion)
		const item = await openaiService.fetchThemeItem(theme);

		// Fetching the image URL for the main item
		const imageUrl = await openaiService.fetchImageUrl(item);
		console.log(`Item image URL: ${imageUrl}`);

		// Convert the image URL to ASCII
		const asciiArt = await asciiService.convertToAscii(imageUrl);
		console.log(`ASCII Art:\n${asciiArt}`);

		res.json({
			asciiArt: asciiArt,
		});
	} catch (error) {
		console.error("Error", error);
		res.status(500).send("Error");
	}
};
