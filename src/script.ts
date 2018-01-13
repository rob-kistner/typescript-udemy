
const repeat = (s:string='-', amt:number=10): string => Array(amt).join(s);

const loghdr = (msg: string): void => {
    let lines:string = `${repeat("- ", 30)}`;
    console.log(`
        ${lines}
            ${msg}
        ${lines}

`);
}


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

const numbers = [1, 10, 82, -5];

console.log(Math.max(...numbers));

function makeArray( name: string, ...args: number[] ) {
    return args;
}
console.log(makeArray("Max", 51,2,13));


// ---------------------------------------------------
loghdr("DESTRUCTURING");
// ---------------------------------------------------

const myHobbies = ['Cooking', 'Sports', 'Skindiving'];

const [ hobby1, hobby2, hobby3 ] = myHobbies;

console.log(hobby1, hobby2, hobby3);


const userData = {
    userName: "Max",
    age: 27
};
const {userName: myName, age: myAge} = userData;

console.log(myName);
console.log(myAge);


// ----------------------------------------------------
loghdr("TEMPLATE LITERALS");
// ----------------------------------------------------

const userName = "Max";
const greeting = `Hello,
I'm ${userName}
Pretty cool...
`;
console.log(greeting);

