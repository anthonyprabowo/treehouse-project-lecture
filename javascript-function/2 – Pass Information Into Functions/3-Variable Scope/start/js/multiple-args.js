function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}

getArea(10, 20, 'sq ft');