"use strict";
var myName = 'Max';
// myName = 28;
var myAge = 27.5;
// myAge = 'Max';
var hobbies = ["Coooking", "Sports"];
// tuples
var address = ["Superstreet", 100];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 100] = "Gray";
    Color[Color["Green"] = 56] = "Green";
    Color[Color["Blue"] = 57] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
// console.log(myColor);
var car = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);
function returnMyName() {
    return myName;
}
// console.log(returnMyName());
function sayHello() {
    console.log("Hello!");
}
function multiply(val1, val2) {
    return val1 * val2;
}
// console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
// console.log(myMultiply(5, 6));
var userData = {
    name: "Max",
    age: 27
};
userData.name = "RobK";
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var myRealRealAge = 27;
var finalValue = "A string";
var checkFinalValue = function () {
    if (typeof finalValue == "string")
        return "It's a string alright!";
    else
        return "Not a string";
};
// never
function neverReturns() {
    throw new Error("Never returns: error!");
}
