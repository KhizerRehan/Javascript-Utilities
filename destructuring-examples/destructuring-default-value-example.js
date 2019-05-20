// Empty Array:
const [a = 10, b = 20] = [];
console.log('Default Value a:', a);
console.log('Default Value b:', b);

// Array with value:
const [c = 10, d = 20] = [100, 200];
console.log('Given Value c:', a);
console.log('Given Value d:', b);

//Default values can also refer to other variables including the one in the same array literal.
var [firstName = "Khizer", lastName = firstName] = [];
console.log(firstName); //Output: Khizer
console.log(lastName); //Output: Khizer
var [firstName = "Khizer", lastName = firstName] = ["Nickname"];
console.log(firstName); //Output: Nickname
console.log(lastName); //Output: Nickname
var [firstName = "Khizer", lastName = firstName] = ["Khizer", "Rehan"];
console.log(firstName); //Output: Khizer
console.log(lastName); //Output: Rehan
