// Exercise 1 - How was your TypeScript Class?
class Car
{
    private _name = ""
    private _acceleration = 0;

    constructor( _name:string ) {}

    get acceleration():number {
        return this._acceleration;
    }

    honk():void {
        console.log("Toooooooooot!");
    }

    accelerate( speed:number ):void {
        this._acceleration += speed;
    }

    checkSpeed():void {
        console.log(`I'm going ${this._acceleration}mph!`);
    }
}

let car = new Car("BMW");
car.honk();
car.checkSpeed();
car.accelerate(10);
car.checkSpeed();



// Exercise 2 - Two objects, based on each other ...
class BaseObject
{
    constructor( protected _width = 0, protected _length = 0 ) {}
}

class Rectangle extends BaseObject
{
    constructor( width:number, length:number ) {
        super( width, length );
    }

    calcSize():number {
        return this._width * this._length;
    }
}
let rect = new Rectangle(5,2);
console.log(rect.calcSize());

// Exercise 3
class Person
{
    private _firstName:string = "";

    constructor() {}

    get firstName():string {
        return this._firstName;
    }
    set firstName( name:string ) {
        if(name.length > 3)
            this._firstName = name;
        else
            this._firstName = "";
    }
}

let me = new Person();
console.log(me.firstName);
me.firstName = "Ma";
console.log(me.firstName);
me.firstName = "Maximilian";
console.log(me.firstName);
