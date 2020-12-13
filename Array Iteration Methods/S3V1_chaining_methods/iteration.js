const arr = [1,2,3];

const smallerArr = arr
    .filter(number => number !== 2)
    .map(number => number + 1); // chaining array methods

console.log(incrementedArr); // => [2,4]
