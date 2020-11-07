function sayGreeting(greeting = 'Good morning', name = 'student') {
  return `${greeting}, ${name}!`;
}

function getArea(width, length, unit) {
  const area = width * length;
  return `${area} ${unit}`;
}
