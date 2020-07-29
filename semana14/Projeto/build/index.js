"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const createAccount = (account) => {
    if (account.idade >= 18) {
        const fileName = "accounts.json";
        const bufferReader = fs.readFileSync(fileName);
        const bufferText = bufferReader.toString();
        const accounts = JSON.parse(bufferText);
        const newAccount = {
            idade: account.idade,
            cpf: account.cpf,
            saldo: 0,
            extrato: null
        };
        accounts.push(JSON.stringify(newAccount));
        const updateAccounts = JSON.stringify(accounts);
        fs.writeFileSync(fileName, updateAccounts);
    }
    else {
        console.log("Idade deve ser maior ou igual a 18");
    }
};
const getAllAccounts = () => {
    const fileName = "accounts.json";
    const bufferReader = fs.readFileSync(fileName, "utf-8");
    const accounts = JSON.parse(bufferReader);
    console.log(accounts);
};
const creatingAccount = {
    idade: Number(process.argv[2]),
    cpf: process.argv[3],
    saldo: 0,
    extrato: null
};
getAllAccounts();
//# sourceMappingURL=index.js.map