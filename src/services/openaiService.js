// src/services/openaiService.js
const { OpenAI } = require("openai");

// Assuming OPENAI_API_KEY is correctly set in your environment variables
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

class OpenAIService {
	async fetchThemeItem(theme) {
		try {
			const completion = await openai.chat.completions.create({
				messages: [
					{
						role: "system",
						content:
							"You are the creator of the board game Pictionary and you are designed to output JSON.",
					},
					{
						role: "user",
						content: `Provide a new non-repeated list of 6 random but still easy and popular '${theme}' that could be used in the Pictionary game. Ensure each is distinct and guessable. Provide single items separated by commas.`,
					},
				],
				model: "gpt-3.5-turbo",
				response_format: { type: "json_object" },
			});
			// Parse the JSON-formatted content
			const itemsStr = JSON.parse(completion.choices[0].message.content);

			// Extract the array of items
			const items = Object.values(itemsStr)[0];
			console.log(`Items: ${items}`);

			// Selecting a random item from the list
			const selectedItem = items[Math.floor(Math.random() * items.length)];
			console.log(`Selected item: ${selectedItem}`);

			return selectedItem;
		} catch (error) {
			console.error("Error fetching theme item from OpenAI:", error);
			throw error;
		}
	}

	async fetchImageUrl(item) {
		try {
			const response = await openai.images.generate({
				prompt: `Create an image of a single ${item}. The subject should be full body and centered.`,
				style: "vivid",
				size: "512x512",
			});

			// Assuming the first image's URL is what you're interested in
			const imageUrl = response.data[0].url;
			console.log(imageUrl);
			return imageUrl;
		} catch (error) {
			console.error("Error fetching image from OpenAI:", error);
			throw error;
		}
	}
}

module.exports = new OpenAIService();
