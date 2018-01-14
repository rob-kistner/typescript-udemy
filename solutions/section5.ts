class Person2
{
    name: string;

    // private, only available within the object
    private type: string;

    // protected only available within objects or 
    // inherited class objects
    protected age: number = 0;

    // public username in the constructor parameter list
    // is a shortcut to creating a class property
    constructor(name: string, public username: string) {
        this.name = name;
    }

    public printAge() {
        console.log(this.age);
        this.setType("Old Guy");
    }

    private setType(type:string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person2("Rob Kistner", "RobK");

console.log(person.name, person.username);
person.printAge();


class RobK extends Person2
{
    constructor(username: string) {
        super("Rob", username);
        this.age = 47;
    }
}
const robk = new RobK("rkistner");
console.log(robk);

// getters & setters
class Plant
{
    private _species: string = "default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3) this._species = value;
    }
}

let plant = new Plant();
plant.species = "Carnation";
console.log(plant.species);


// Static methods & properties

class Helpers
{
    static PI:number = 3.14;
    
    static calcCircumference(diameter:number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));


// Abstract Classes
// can only be inherited from
abstract class Project
{
    projectName: string = "default";
    budget: number = 1000;

    abstract changeName(name: string): void;

    calcBudget = () => this.budget * 2;
}

class ITProject extends Project
{
    changeName(name: string): void {
        this.projectName = name;
    }
}
let newProj = new ITProject();
console.log(newProj);
newProj.changeName("Super IT Project");
console.log(newProj.calcBudget());
console.log(newProj);


// Private constructors (Singletons)
// when you only want one instance of a class
//
class OnlyOne
{
    // the instance keyword here flags it
    // as a true singleton
    private static instance: OnlyOne;

    // readonly property denies writing
    // to the property from outside the class
    // at all
    private constructor( public readonly name: string ) {}

    // class can't be instanciated. Use a static method 
    // in the class that just returns the instance
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One...');
        }
        return OnlyOne.instance;
    }
}

let right = OnlyOne.getInstance();
