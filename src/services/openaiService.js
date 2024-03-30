const OpenAI = require('openai');

// Instantiate the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class OpenAIService {
  async fetchImageUrl(theme) {
    const prompt = `A simple and basic ${theme} image.`;
    try {
      const response = await openai.images.generate({
        prompt: prompt,
        // Add any other parameters required for image generation here
      });
      // Assuming the URL or relevant data is in response.data; adjust according to actual response structure
      const imageUrl = response.data;
      return imageUrl;
    } catch (error) {
      console.error('Error fetching image from OpenAI:', error);
      throw error;
    }
  }
}

module.exports = new OpenAIService();
