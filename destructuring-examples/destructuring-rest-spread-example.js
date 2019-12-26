/*
  If the (…) operator appear on the left-hand side in destructuring then it is a REST PARAMETER
  A Rest parameter is used to map all the remaining elements in the array that have not been mapped
  to the rest variable itself.
*/

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, , third, ...others] = planets;
console.log(first); //Output: Mercury
console.log(third); //Output: Venus
console.log(others); //Output: ["Mars", "Pluto", "Saturn"]


/*
  If the (…) operator appears on the right-hand in destructuring then it is a SPREAD SYNTAX.
  It takes all the other elements in the array which have no variable mapped to them and then
  maps it to the rest variable.
 */

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn","pluto"];
console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Saturn"]

/*
 When you can have more variables on the left-hand side,
 it maps the single elements in the array equally to the variables
 */

var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, ...rest] = ["Mercury", ...planets];
console.log(first); //Output: Mercury
console.log(second); //Output: Mercury
console.log(rest); //Output: ["Earth", "Venus", "Mars", "Pluto", "Saturn"]
var planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];
var [first, second, third, fourth ...rest] = ["Mercury", "Earth", ...planets];
console.log(first); //Output: Mercury
console.log(second); //Output: Earth
console.log(third); //Output: Mercury
console.log(fourth); //Output: Earth
console.log(rest); //Output: ["Venus", "Mars", "Pluto", "Satur


var places = ["first", "second", "third", "fourth"];
var [a, b, , d] = [...places];
console.log(a); //Output: first
console.log(b); //Output: second
console.log(d); //Output: fourth
