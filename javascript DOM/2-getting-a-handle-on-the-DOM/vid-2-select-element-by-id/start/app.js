const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const reset = document.getElementById('reset');

myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});

reset.addEventListener('click', function(){
  myHeading.style.color = 'black';
})