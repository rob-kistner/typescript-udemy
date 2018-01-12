
let myName = 'Max';
// myName = 28;
let myAge = 27.5;
// myAge = 'Max';
let hobbies: any[] = ["Coooking", "Sports"];

// tuples
let address: [string, number] = ["Superstreet", 100];

// enums
enum Color {
    Gray = 100,
    Green = 56,
    Blue
}
let myColor: Color = Color.Blue;
// console.log(myColor);

let car: any = "BMW";
// console.log(car);
car = { brand: "BMW", series: 3 };
// console.log(car);

function returnMyName(): string {
    return myName;
}
// console.log(returnMyName());

function sayHello(): void {
    console.log("Hello!");
}

function multiply( val1: number, val2: number ): number {
    return val1 * val2;
}
// console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;

// myMultiply = sayHello;
// myMultiply();

myMultiply = multiply;
// console.log(myMultiply(5, 6));

let userData: { name: string, age: number } = {
    name: "Max",
    age: 27
};
userData.name = "RobK";

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],

    output: function(all:boolean): number[] {
        return this.data;
    }
};

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function(all:boolean): number[] {
        return this.data;
    }
}

let myRealRealAge: number | string = 27;

let finalValue = "A string";
var checkFinalValue = (): string => {
    if (typeof finalValue == "string")
        return "It's a string alright!";
    else
        return "Not a string";
}

// never
function neverReturns(): never {
    throw new Error("Never returns: error!");
}

// nullable
