// src/services/openaiService.js
const { OpenAI } = require("openai");

// Assuming OPENAI_API_KEY is correctly set in your environment variables
const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

class OpenAIService {
	async fetchThemeItems(theme) {
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
			const itemsStr = JSON.parse(completion.choices[0].message.content);

			const items = Object.values(itemsStr)[0];
			console.log(`Items: ${items}`);

			return items;
		} catch (error) {
			console.error("Error fetching theme items from OpenAI:", error);
			throw error;
		}
	}

	async fetchThemeItem(items) {
		try {
			const item = items[Math.floor(Math.random() * items.length)];
			console.log(`Selected item: ${item}`);
			return item;
		} catch (error) {
			console.error("Error fetching theme item:", error);
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
