// Collect input from a user
let userInputNumberLow = prompt("Please provide your lowest number");
let userInputNumberHigh = prompt("Please provide your highest number");

// Convert the input to a number
userInputNumberLow = parseInt(userInputNumberLow);
userInputNumberHigh = parseInt(userInputNumberHigh);

if(userInputNumberLow && userInputNumberHigh) { // since NaN is always false, we can check it here
    // Use Math.random() and the user's number to generate a random number
    const randomNumberGenerator = Math.floor(Math.random() * (userInputNumberHigh - userInputNumberLow + 1)) + userInputNumberLow ;

    // Create a message displaying the random number
    console.log(`${randomNumberGenerator} is a random number between ${userInputNumberLow} and ${userInputNumberHigh}`);
} else {
    console.log("You need to provide a number. Try again.")
}



