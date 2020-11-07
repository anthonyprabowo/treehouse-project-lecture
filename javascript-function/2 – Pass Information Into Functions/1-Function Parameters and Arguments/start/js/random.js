function getRandomNumber(upperLimit) {
  const randomNumber = Math.floor( Math.random() * upperLimit ) + 1;
  return randomNumber;
}

console.log(getRandomNumber(100)); // 100 is the argument
console.log(getRandomNumber(6));
console.log(getRandomNumber(1000));