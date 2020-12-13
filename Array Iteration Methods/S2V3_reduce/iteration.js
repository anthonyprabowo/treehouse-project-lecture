const prices = [6.75, 3.10, 4.00, 8.12]; // Total: 21.97
const total = prices.reduce(
    (sum, price) => sum + price,
    0
);

console.log(total);

// challenge
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
const startsWithG = names.reduce((count, name) => {
    if(name[0] === 'G'){
        return count + 1;
    } 
    return count;
}, 0);
console.log(startsWithG);