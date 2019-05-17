// Don't be thrown off by javascript parameter destructuring! It's a common way to cleanly extract properties from objects.

const obj = {
    name: 'Joe',
    food: 'cake'
};

const { name, food } = obj;

console.log(name, food);
// 'Joe' 'cake'


// Extract properties under a different name, you can specify them using the following format.

const obj = {
    name: 'Joe',
    food: 'cake'
};

const { name: myName, food: myFood } = obj;

console.log(myName, myFood);
// 'Joe' 'cake'


// Destructuring can be (and often is) used directly for extracting parameters passed to a function.


const person = {
    name: 'Eddie',
    age: 24
};

function Introduction({ name, age }) {
    console.log(`I'm ${name} and I'm ${age} years old!`);
}

Introduction(person);
// "I'm Eddie and I'm 24 years old!"