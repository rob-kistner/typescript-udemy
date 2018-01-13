// Exercise 1 - Arrow functions
const double = (value:number):number => value * 2;

console.log(double(10));



// Exercise 2 - Default Values
const greet = (name:string="Max"): void => {
    console.log(`Hello, ${name}\n`);
};

greet();
greet("Anna");



// Exercise 3 - Spread Op
let numbers:number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers));


// Exercise 4 - Rest Parameter
let newArray:number[] = [55, 20];
newArray.push(...numbers);

console.log(newArray);



// Exercise 5 - Destructuring Array
let testResults:number[] = [3.89, 2.99, 1.38];
let [result1, result2, result3] = testResults;

console.log(result1, result2, result3);



// Exercise 6 - Destructuring Objects
let scientist = {
    firstName: "Will",
    experience: 12
};
let {firstName:first, experience:exp} = scientist; // aliased!

console.log(first, exp);


