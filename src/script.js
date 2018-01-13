"use strict";
var repeat = function (s, amt) {
    if (s === void 0) { s = '-'; }
    if (amt === void 0) { amt = 10; }
    return Array(amt).join(s);
};
var loghdr = function (msg) {
    var lines = "" + repeat("- ", 30);
    console.log("\n        " + lines + "\n            " + msg + "\n        " + lines + "\n\n");
};
/*
//---------------------------------------------------
loghdr("LET & CONST");
//---------------------------------------------------

let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log( maxLevels );

function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

//---------------------------------------------------
loghdr("ARROW FUNCTIONS");
//---------------------------------------------------

const addNumbers = function(number1:number, number2:number):number {
    return number1 + number2;
};

console.log(addNumbers(3, 2));

const multiplyNumbers = (num1:number, num2:number) => num1 * num2;

console.log(multiplyNumbers(10, 30));


loghdr("ARROW FUNCTIONS - VARIATIONS");
//---------------------------------------------------

const greet = () => {
    console.log("Hello!");
};
greet();

const greetFriend = friend => console.log(friend);

greetFriend("Manu");


//---------------------------------------------------
loghdr("DEFAULT PARAMETERS");
//---------------------------------------------------

const countdown = (start:number = 10) :void => {
    while(start > 0) {
        console.log(start-- + " " + repeat("* ", start+1));
    }
    console.log("Done!");
}
countdown(3);

*/
// ---------------------------------------------------
loghdr("REST & SPREAD");
// ---------------------------------------------------
var numbers = [1, 10, 82, -5];
console.log(Math.max.apply(Math, numbers));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Max", 51, 2, 13));
// ---------------------------------------------------
loghdr("DESTRUCTURING");
// ---------------------------------------------------
var myHobbies = ['Cooking', 'Sports', 'Skindiving'];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1], hobby3 = myHobbies[2];
console.log(hobby1, hobby2, hobby3);
var userData = {
    userName: "Max",
    age: 27
};
var myName = userData.userName, myAge = userData.age;
console.log(myName);
console.log(myAge);
// ----------------------------------------------------
loghdr("TEMPLATE LITERALS");
// ----------------------------------------------------
var userName = "Max";
var greeting = "Hello,\nI'm " + userName + "\nPretty cool...\n";
console.log(greeting);
