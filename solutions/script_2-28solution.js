"use strict";
var _this = this;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"],
    whatImWorth: function () { return console.log(_this.bankAccount.money); }
};
myself.bankAccount.deposit(3000);
console.log(myself);
