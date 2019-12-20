const onesDigitsTimesTwosDigits = (imageData, pixelsTall, pixelsWide) => {
  const image = createImage(imageData, pixelsTall, pixelsWide);
  const layerWithFewestZeroes = findLayerWithFewest(image, 0);

  return layerWithFewestZeroes.filter((pixel) => pixel === 1).length
    * layerWithFewestZeroes.filter((pixel) => pixel === 2).length;
};

const createImage = (imageData, pixelsWide, pixelsTall) => (
  chunk(imageData.split('').map(Number), pixelsTall * pixelsWide)
);

const findLayerWithFewest = (image, digit) => {
  const numberOfDigits = image.map((layer) => (
    layer.filter((pixel) => pixel !== digit).length
  ));

  const highest = Math.max(...numberOfDigits);

  return image[numberOfDigits.indexOf(highest)];
};

const chunk = (array, chunkSize) => (
  Array(Math.ceil(array.length / chunkSize))
    .fill()
    .map((_, index) => index * chunkSize)
    .map((begin) => array.slice(begin, begin + chunkSize))
);

export {
  onesDigitsTimesTwosDigits,
  createImage,
  findLayerWithFewest,
  chunk,
};
