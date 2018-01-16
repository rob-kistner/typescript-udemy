"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator
//
function logged(constructorFn) {
    console.log(constructorFn);
}
// add the above decorator function on
// a line above the class to decorate
//
var Person = /** @class */ (function () {
    function Person() {
        console.log("Hi!");
    }
    Person = __decorate([
        logged
    ], Person);
    return Person;
}());
// Factory
/*
function logging(val: boolean) {
    return val ? logged : null;
}
*/
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Car = /** @class */ (function () {
    function Car() {
        this.make = "Mazda";
        this.model = "Mazda 3";
    }
    Car = __decorate([
        printable
    ], Car);
    return Car;
}());
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logged,
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
var car = new Car();
car.print();
// Method Decorator
//
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
//# sourceMappingURL=index.js.map