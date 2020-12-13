const fruits = ['apple', 'pear', 'cherry'];
let capitalizeFruits = [];

fruits.forEach(fruit => {
    capitalizeFruits.push(fruit.toUpperCase());
});
capitalizeFruits.forEach(capfruits => console.log(capfruits));

// challenge 1
const prices = [6.75, 3.10, 4.00, 8.12]; // total 21.97
let total = 0;

prices.forEach(price => {
    total += price;
});

console.log(total);

// challenge 2
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const newNames = [];

names.forEach(name => {
    if(name.charAt(0).toLowerCase() === 's') {
        newNames.push(name)
    } else {
        // do nothing
    }
});

newNames.forEach(newname => console.log(newname));

// index and array parameter
names.forEach((name, index) => console.log(`${index + 1}) ${name}`));
