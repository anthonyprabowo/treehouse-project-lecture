const getRandomNumber = (upper) => {
  const randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
};

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
