import { createImage, chunk } from './part1';

const decodeImage = (imageData, pixelsWide, pixelsTall) => {
  const image = createImage(imageData, pixelsWide, pixelsTall).reverse();
  const finalImage = image.shift();
  image.forEach((layer) => {
    layer.forEach((pixel, idx) => {
      finalImage[idx] = pixel !== 2 ? pixel : finalImage[idx];
    });
  });

  return chunk(finalImage, pixelsWide);
};

export { decodeImage };
