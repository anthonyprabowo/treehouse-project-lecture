const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10));

console.log(numbers);

// challenge
const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits);

// another challenge
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => `$${price.toFixed(2).toString()}`;
const priceString = prices.map(priceToDollars);
console.log(priceString);
