"use strict";
// Exercise 1 - Arrow functions
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - Default Values
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello, " + name + "\n");
};
greet();
greet("Anna");
// Exercise 3 - Spread Op
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - Rest Parameter
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - Destructuring Array
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - Destructuring Objects
var scientist = {
    firstName: "Will",
    experience: 12
};
var first = scientist.firstName, exp = scientist.experience; // aliased!
console.log(first, exp);
