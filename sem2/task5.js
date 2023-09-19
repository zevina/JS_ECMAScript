"use strict";

/*Создайте класс BankAccount, который представляет банковский счет. 
У него должны быть свойства accountNumber (номер счета) и balance (баланс), 
а также методы deposit(amount) для пополнения счета, withdraw(amount) для снятия денег со счета и метод printBalance, который отобразит в консоль текущий баланс счета. 
Класс должен иметь также статическое свойство bankName со значением "GBank", которое содержит название банка.*/

class BankAccount {
    static bankName = "GBank";

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        validateAmount(amount);
        this.balance += amount;
    }

    withdraw(amount) {
        validateAmount(amount);
        if (amount > this.balance) {
            throw new Error(`Insufficient funds in account "${this.accountNumber}"`);
        }
        this.balance -= amount;
    }

    printBalance() {
        console.log(`${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`);
    }
}

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
// account1.printBalance(); // GBank account "1234567890" balance: 1300
account1.withdraw(200);
// account1.printBalance(); // GBank account "1234567890" balance: 1300
// account1.withdraw(1500); // Insufficient funds in account "1234567890"
// account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
// account1.deposit(-500); // Wrong deposit amount, must be a positive number.
// account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
account1.printBalance(); // GBank account "1234567890" balance: 1300
// account1.printBalance(); // GBank account "1234567890" balance: 1300