
interface NamedPerson
{
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet( lastName:string ): void;
}
/*
function greet( NamedPerson: {firstName:string, age?:number} ) {
    console.log("Hello, " + person.firstName);
}

function changeName(NamedPerson: {firstName:string}) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Duder",
    age: 48,
    hobbies: ["Cooking", "Sports"],
    greet(lastName:string) {
        console.log("Heya, I am " + this.firstName + " " + lastName);
    }
}

changeName(person);
greet(person);
person.greet("Anything");


class Person implements NamedPerson
{
    firstName: string;
    lastName: string;

    greet(lastName: string) {
        console.log(`Heya, I am ${this.firstName} ${this.lastName}`);
    }
}
const myPerson = new Person();
myPerson.firstName = "Maximillian";
myPerson.lastName = "Nada";
greet(myPerson);
myPerson.greet(myPerson.lastName);
*/

// Function types
//

interface DoubleValueFunc
{
    (number1: number, number2: number): number;
}

let myDoubleFunc: DoubleValueFunc;
myDoubleFunc = (num1:number, num2:number):number => (num1 + num2) * 2;

console.log(myDoubleFunc(10,20));


// Interface inheritance
//

interface AgedPerson extends NamedPerson
{
    age:number;
    hairColor?:string;
}

const oldPerson: AgedPerson = {
    age: 27,
    firstName: "Max",
    greet(lastName: string) {
        console.log("Hey, enough already");
    }
}
console.log(oldPerson);