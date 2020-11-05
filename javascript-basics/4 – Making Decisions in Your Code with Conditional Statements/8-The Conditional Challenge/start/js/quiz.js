/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
const answer1 = "JAKARTA";
const answer2 = "DOG";
const answer3 = "FRIED CHICKEN";
const answer4 = "FULL-STACK DEVELOPER";
const answer5 = "GOOGLE";


// 2. Store the rank of a player
let playerRank = '';
let playerScore = 0;



// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/

const playerAnswer1 = prompt("Player 1: Where do I live?");

const playerAnswer2 = prompt("Player 1: What is my favorite pet?");

const playerAnswer3 = prompt("Player 1: What is my favorite food?");

const playerAnswer4 = prompt("Player 1: What do I want to become?");

const playerAnswer5 = prompt("Player 1: Where do I want to work?");

if(playerAnswer1.toUpperCase() === answer1) {
  playerScore += 1;
} 

if(playerAnswer2.toUpperCase() === answer2) {
  playerScore += 1;
}

if(playerAnswer3.toUpperCase() === answer3) {
  playerScore += 1;
}

if(playerAnswer4.toUpperCase() === answer4) {
  playerScore += 1;
}

if(playerAnswer5.toUpperCase() === answer5) {
  playerScore += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

/*
  the conditional statement check the player score and assign
  rank to the player
*/
if(playerScore === 5) {
  playerRank = "Gold";
} else if (playerScore >= 3) {
  playerRank = "Silver";
} else if (playerScore >= 1) {
  playerRank = "Bronze";
} else {
  playerRank = "No Crown"
}


// 6. Output results to the <main> element
main.innerHTML = `
  <h2>You got ${playerScore} out of 5 questions correct.</h2>
  <p>Crown earned: <strong>${playerRank}</strong></p>
`
