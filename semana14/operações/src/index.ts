// Exercício 02
const op: string = process.argv[2]
const a: number = Number(process.argv[3])
const b: number = Number(process.argv[4])
function exec02(operacao: string, num1: number, num2: number): void{
    if(operacao === "sub"){
        console.log(num1 - num2)
    }else if(operacao === "add"){
        console.log(num1 + num2)
    }else if(operacao === "mult"){
        console.log(num1 * num2)
    }else if(operacao === "div"){
        console.log(num1 / num2) 
    }else{
        console.log("operação inválida")
    }
}
exec02(op, a, b)