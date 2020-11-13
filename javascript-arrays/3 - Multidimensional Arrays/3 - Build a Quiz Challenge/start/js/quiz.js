// 1. Create a multidimensional array to hold quiz questions and answers
const quizQuestionAnswer = [
  ['What is my name?', 'anthony'],
  ['What is the fastest land animal?', 'cheetah'],
  ['What is the fastest fish?', 'sailfish'],
  ["What is bb's dog name?", 'clyde'],
  ["What is bb's name?", 'sharon']
];

const quizAnswer = [
  [], //correct answer
  [] // wrong answer
];

// 2. Store the number of questions answered correctly
let correctScore = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for(let i = 0; i < quizQuestionAnswer.length; i++) {
  let playerAnswer = prompt(quizQuestionAnswer[i][0]);
  if(playerAnswer.toLowerCase() === quizQuestionAnswer[i][1]) {
    correctScore++;
    quizAnswer[0].push(quizQuestionAnswer[i][0]);
  } else {
    quizAnswer[1].push(quizQuestionAnswer[i][0]);
  }
}

/*
  Creating function to turn array into list
    - the function accepts 2 param: arr and arrNum target
    - arr = array
    - arrNum = determines which array to check (the correct answer or wrong answer)
*/
function createListItems(arr, arrNum) {
  let html = '';
  for(let i = 0; i < quizAnswer[arrNum].length; i++) {
    html += `<li>${arr[arrNum][i]}</li>`;
  }
  return html;
}


// 4. Display the number of correct answers to the user
let scoreHTML = `<h1>You got ${correctScore} question(s) correct</h1>`;
let correctAnswerHTML = ` 
  <h2>You got these questions right:</h2>
  <ol>
    ${createListItems(quizAnswer, 0)} 
  </ol>
  <h2>You got these questions wrong:</h2>
  <ol>
    ${createListItems(quizAnswer, 1)} 
  </ol>

`

document.querySelector('main').innerHTML = scoreHTML + correctAnswerHTML;