// src/controllers/asciiController.js
const openaiService = require("../services/openaiService");
const asciiService = require("../services/asciiService");

exports.generateAsciiArt = async (req, res) => {
	try {
		const theme = req.body.theme;
		console.log(`Received theme: ${theme}`);

		const items = await openaiService.fetchThemeItems(theme);

		const item = await openaiService.fetchThemeItem(items);

		const imageUrl = await openaiService.fetchImageUrl(item);
		console.log(`Item image URL: ${imageUrl}`);

		const asciiArt = await asciiService.convertToAscii(imageUrl);
		console.log(`ASCII Art:\n${asciiArt}`);

		res.json({
			asciiArt: asciiArt,
			items: items,
		});
	} catch (error) {
		console.error("Error", error);
		res.status(500).send("Error");
	}
};
