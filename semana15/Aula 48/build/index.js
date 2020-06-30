"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSONFileManager_1 = require("./JSONFileManager");
const classes_1 = require("./classes");
const name = process.argv[2];
const age = Number(process.argv[3]);
const cpf = process.argv[4];
const newAccount = new classes_1.UserAccount(name, age, cpf);
const fileManager = new JSONFileManager_1.JSONFileManager('accounts.json');
const accounts = [];
const newBank = new classes_1.Bank(accounts, fileManager);
console.log(newBank.getAccountByCpfAndName('451.355.598-09'));
//# sourceMappingURL=index.js.map