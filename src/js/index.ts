// Decorator
//
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

// add the above decorator function on
// a line above the class to decorate
//
@logged
class Person
{
    constructor() {
        console.log("Hi!");
    }
}

// Factory

/*
function logging(val: boolean) {
    return val ? logged : null;
}
*/


function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@printable
class Car
{
    make:string = "Mazda";
    model:string = "Mazda 3";
}

@logged
@printable
class Plant
{
    name = "Green Plant";
}

const plant = new Plant();
(<any>plant).print();

const car = new Car();
(<any>car).print();

// Method Decorator
//
function editable(value: boolean):Function {
    return function(target:any, propName:string, descriptor:PropertyDecorator) {
        descriptor.writable = value;
    }
}

class Project {
    projectName:string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget():void {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
    console.log(2000);
}
project.calcBudget();
