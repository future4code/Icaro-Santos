"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const tarefa = process.argv[2];
try {
    fs.appendFileSync("tarefas.txt", `\n${tarefa}`, 'utf8');
    console.log("Tarefa inserida com sucesso");
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=index.js.map