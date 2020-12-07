const ernie = {
    animal: 'dog',
    age: '1',
    breed: 'pug',
    bark: function(){
        console.log('Woof!');
    }
}

// dot notation
console.log(ernie.age);
console.log(ernie.breed);

ernie.bark();

// bracket notation
console.log(ernie['age']);
console.log(ernie['breed']);

ernie['bark']();

var prop = 'breed';
console.log(ernie[prop]);

// changing and adding properties
ernie.age = 2; 
ernie['age'] = 2;

ernie.color = 'black';

console.log(ernie);