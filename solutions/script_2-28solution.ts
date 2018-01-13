type BankAccount = { money: number, deposit: (value: number) => void };

let bankAccount: BankAccount = {
    money: 2000,
    deposit: function (value: number) {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: BankAccount, hobbies: string[], whatImWorth: ()=> void } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"],
    whatImWorth: ():void => console.log(this.bankAccount.money)
};

myself.bankAccount.deposit(3000);

console.log(myself);
