const users = [
  {name: 'Samir', age: 27},
  {name: 'Angela', age: 33},
  {name: 'Beatrice', age: 42}
];

const noSamir = users.filter(obj => obj.name !== 'Samir');
console.log(noSamir)

// challenge
const details = users.map(obj => `${obj.name} is ${obj.age} years old`);
console.log(details);

// new challenge
const newUsersObject = users.reduce((usersObject, user) => {
  usersObject[user.name] = user.age // setting the property inside the new object
  return usersObject; // have to return from callback
}, {})
console.log(newUsersObject)
