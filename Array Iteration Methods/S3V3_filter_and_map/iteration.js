const userNames = ['Samir', 'Angela', 'Beatrice', 'Shaniqua', 'Marvin', 'Sean'];
    // Result: [{name: 'Samir'}, {name: 'Shaniqua'}, {name:'Sean'}];

const startWithS = userNames
    .filter(name => name.charAt(0) === 'S')
    .map(name => ({ name: name}));

console.log(startWithS);

// new challenge
const users = [
    {name: 'Samir', age: 27},
    {name: 'Angela', age: 33},
    {name: 'Beatrice', age: 42},
    {name: 'Shaniqua', age: 30},
    {name: 'Marvin', age: 23},
    {name: 'Sean', age: 47}
];

const name30Years = users
    .filter(obj => obj.age >= 30)
    .map(user => user.name);

console.log(name30Years);