/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

function getRandomNumber(lower, upper = 100) {
    if(isNaN(lower) || isNaN(upper)) {
        throw Error("Please provide a number")
    } else {
        const randomNumber = Math.floor(Math.random() * (upper - lower + 1)) + lower;
        return randomNumber
    }
    
}


// Call the function and pass it different values

console.log(getRandomNumber(10, 25));
console.log(getRandomNumber('six', 10));
