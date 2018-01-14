"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - How was your TypeScript Class?
var Car = /** @class */ (function () {
    function Car(_name) {
        this._name = "";
        this._acceleration = 0;
    }
    Object.defineProperty(Car.prototype, "acceleration", {
        get: function () {
            return this._acceleration;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this._acceleration += speed;
    };
    Car.prototype.checkSpeed = function () {
        console.log("I'm going " + this._acceleration + "mph!");
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.checkSpeed();
car.accelerate(10);
car.checkSpeed();
// Exercise 2 - Two objects, based on each other ...
var BaseObject = /** @class */ (function () {
    function BaseObject(_width, _length) {
        if (_width === void 0) { _width = 0; }
        if (_length === void 0) { _length = 0; }
        this._width = _width;
        this._length = _length;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length) {
        return _super.call(this, width, length) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this._width * this._length;
    };
    return Rectangle;
}(BaseObject));
var rect = new Rectangle(5, 2);
console.log(rect.calcSize());
// Exercise 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            if (name.length > 3)
                this._firstName = name;
            else
                this._firstName = "";
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var me = new Person();
console.log(me.firstName);
me.firstName = "Ma";
console.log(me.firstName);
me.firstName = "Maximilian";
console.log(me.firstName);
//# sourceMappingURL=exercise-5-67.js.map