"use strict";

/*Напишите конструктор объекта BankAccount, который будет представлять банковский счет. 
Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число). 
Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами:
1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
2. withdraw(amount): принимает аргумент amount (число) и уменьшает баланс на указанную сумму.
3. getBalance(): возвращает текущий баланс счета.

В случае неверно переданных значений, либо невозможности провести операцию, должны выводиться соответсвующие сообщения.*/

function BankAccount(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
}

BankAccount.bankName = "GBank";

BankAccount.prototype.deposit = function (amount) {
    validateAmount(amount);
    this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
    validateAmount(amount);
    if (amount > this.balance) {
        throw new Error(`Insufficient funds in account "${this.accountNumber}"`);
    }
    this.balance -= amount;
};

BankAccount.prototype.printBalance = function () {
    console.log(`${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`);
};

function validateAmount(amount) {
    if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Wrong deposit amount, must be a positive number.");
    }
    if (String(amount % 1).length > 4) {
        throw new Error("Wrong money format.");
    }
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500);
account1.withdraw(200);
account1.printBalance(); // GBank account "1234567890" balance: 1300