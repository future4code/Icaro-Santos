"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = exports.Transaction = exports.UserAccount = void 0;
const JSONFileManager_1 = require("./JSONFileManager");
class UserAccount {
    constructor(name, age, cpf) {
        this.name = name;
        this.age = age;
        this.cpf = cpf;
        this.balance = 0;
        this.transactions = [];
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCPF() {
        return this.cpf;
    }
    getBalance() {
        return this.balance;
    }
    getTransactions() {
        return this.transactions;
    }
}
exports.UserAccount = UserAccount;
class Transaction {
    constructor(date, value, description) {
        this.date = date;
        this.value = value;
        this.description = description;
    }
    getDate() {
        return this.date;
    }
    getValue() {
        return this.value;
    }
    getDescription() {
        return this.description;
    }
}
exports.Transaction = Transaction;
class Bank {
    constructor(accounts, fileManager) {
        this.createAccount = (userAccount) => {
        };
        this.getAccountByCpfAndName = (cpf, name) => {
            console.log(this.accounts.find(item => {
                return item.getCPF() === cpf;
            }));
            return;
        };
        this.accounts = accounts;
        this.fileManager = fileManager;
    }
    getAllAccounts() {
        const fileManager = new JSONFileManager_1.JSONFileManager('accounts.json');
        const userList = fileManager.getObjectFromFile();
        return userList;
    }
}
exports.Bank = Bank;
//# sourceMappingURL=classes.js.map