import fetch from 'node-fetch';
import { createCanvas, loadImage } from 'canvas';
import { config } from '@app/config';

export const convertImageToTeamPhotos = async (urls: { url: string }[]) => {
  const images = await Promise.all(
    urls.map(async ({ url }) => {
      const response = await fetch(config.removeBg.url, {
        method: 'POST',
        body: JSON.stringify({ image_url: url }),
        headers: {
          'X-Api-Key': config.removeBg.apiKey,
          'Content-Type': 'application/json',
        },
      });
      const buffer = await response.buffer();
      return buffer;
    })
  );

  // Create a canvas with a white background
  const canvas = createCanvas(700, 700); // adjust size as needed
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw each image onto the canvas
  for (let i = 0; i < images.length; i++) {
    const img = await loadImage(images[i]);
    ctx.drawImage(img, i * 100, 0); // adjust position as needed
  }

  // Convert the canvas to a Buffer and send it as a response
  const buffer = canvas.toBuffer('image/png');
  return buffer;
};
