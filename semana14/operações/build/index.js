const op = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);
function exec02(operacao, num1, num2) {
    if (operacao === "sub") {
        console.log(num1 - num2);
    }
    else if (operacao === "add") {
        console.log(num1 + num2);
    }
    else if (operacao === "mult") {
        console.log(num1 * num2);
    }
    else if (operacao === "div") {
        console.log(num1 / num2);
    }
    else {
        console.log("operação inválida");
    }
}
exec02(op, a, b);
//# sourceMappingURL=index.js.map