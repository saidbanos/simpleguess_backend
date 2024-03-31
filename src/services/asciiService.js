const Jimp = require("jimp");
const Art = require("ascii-art");
const fs = require("fs");
const path = require("path");

const imagesDirectory = path.join(__dirname, "images");
if (!fs.existsSync(imagesDirectory)) {
	fs.mkdirSync(imagesDirectory, { recursive: true });
}

const downloadImage = async (imageUrl) => {
	const image = await Jimp.read(imageUrl);
	const imageName = path.join(imagesDirectory, `${Date.now()}.jpg`);
	await image.writeAsync(imageName);
	return imageName;
};

const convertToAscii = async (imageUrl) => {
	try {
		const imagePath = await downloadImage(imageUrl);

		return new Promise((resolve, reject) => {
			Art.image(
				{
					filepath: imagePath,
					alphabet: "hatching",
				},
				(err, ascii) => {
					fs.unlink(imagePath, (err) => {
						if (err) console.error("Failed to delete the image:", imagePath);
					});

					if (err) return reject(err);
					resolve(ascii);
				}
			);
		});
	} catch (error) {
		console.error("Failed to convert image to ASCII:", error);
		throw error;
	}
};

module.exports = { convertToAscii };
