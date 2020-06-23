// Exercício 01
function exec01(nome?: string, idade?: number){
    nome = process.argv[2]
    idade = Number(process.argv[3])
    console.log("Seu nome é", nome, "e sua idade é", idade, "e sua idade daqui a sete anos será", idade + 7)
}
exec01()