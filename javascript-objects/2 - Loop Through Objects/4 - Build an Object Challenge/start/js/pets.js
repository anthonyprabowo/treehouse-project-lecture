/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pet = [
  {
    name: 'Joey',
    type: 'Dog',
    breed: 'Aussie',
    age: '4 years',
    photo: 'img/aussie.jpg'
  },
  {
    name: 'Augsie',
    type: 'Dog',
    breed: 'Dachshund',
    age: '4 months',
    photo: 'img/dachshund.jpg'
  },
  {
    name: 'Clyde',
    type: 'Dog',
    breed: 'Golden',
    age: '2 years',
    photo: 'img/golden.jpg'
  },
  {
    name: 'Dylan',
    type: 'Cat',
    breed: 'Persian',
    age: '1 year',
    photo: 'img/persian.jpg'
  },
  {
    name: 'Puggey',
    type: 'Dog',
    breed: 'Pug',
    age: '8 years',
    photo: 'img/pug.jpg'
  },
  {
    name: 'Colby',
    type: 'Cat',
    breed: 'Tabby',
    age: '9 months',
    photo: 'img/tabby.jpg'
  }
];

function petBuilder(arr) {
  let html = '';
  for(let i = 0; i < arr.length; i++){
    html += `
      <h2>${arr[i].name}</h2>
      <h3>${arr[i].type} | ${arr[i].breed}</h3>
      <p>Age: ${arr[i].age}</p>
      <img src=${arr[i].photo} alt=${arr[i].breed}>
    `;
  }
  return html;
}

document.querySelector('main').innerHTML = petBuilder(pet);