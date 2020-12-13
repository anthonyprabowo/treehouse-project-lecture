const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];
const startWithS = name => name.charAt(0) === 'S';
const sNames = names.filter(startWithS);

// let sNames = [];

//previous code
// names.forEach(name => {
//   if(name.charAt(0) === 'S') {
//     sNames.push(name);
//   }
// });

// const sNames = names.filter(name => name.charAt(0) === 'S');  for filter, you need to return true or false. in this case, the condition already return true or false by it self so we don't need to add if/else statement.

console.log(sNames);

// another example
const numbers = [1,2,3,4,5];
const no3 = numbers.filter(num => num !== 3);
console.log(no3);
const only2 = numbers.filter(num => num === 2);
console.log(only2);

// challenge
const number = [1,2,3,4,5,6,7,8,9,10];
const even = number.filter(num => num%2 === 0);
console.log(even);
