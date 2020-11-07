function sayGreeting(greeting = 'Good morning', name = "Student") {
    return `${greeting}, ${name}!`;
}

function getArea(width, length, unit = "sq ft") {
    const area = width * length;
    return `${area} ${unit}`;
  }