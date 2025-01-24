const generateImagePath = (name) => `/images/${name}.png`;

const imageNames = [
  "auth", 
   
];

const IMAGES = imageNames.reduce((acc, name) => {
  acc[name.toUpperCase()] = generateImagePath(name);
  return acc;
}, {});

export { IMAGES };
