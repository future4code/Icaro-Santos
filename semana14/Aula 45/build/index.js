"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const tarefa = process.argv[2];
try {
    const data = fs.readFileSync("tarefas.txt");
    console.log(data.toString());
}
catch (err) {
    console.error(err);
}
//# sourceMappingURL=index.js.map