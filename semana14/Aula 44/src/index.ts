// Exercício 01
// Exercício A
// Linguagem já acusa erro de tipo
// let minhaString: string = 13

// Exercício B
// Para fazer com que aceite dois tipos de variáveis, devemos fazer da seguinte forma
let meuNumero:  number | string = "Olá"

// Exercício C, D, E
enum CoresArcoIris {
    vermelho = "vermelho",
    laranja = "laranja",
    amarelo = "amarelo",
    verde = "verde",
    azul = "azul",
    turquesa = "turquesa",
    violeta = "violeta",
}
type pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: CoresArcoIris
}

const icaro: pessoa = {
    nome: "Icaro",
    idade: 23,
    corFavorita: CoresArcoIris.azul
}

const melissa: pessoa = {
    nome: "Melissa",
    idade: 20,
    corFavorita: CoresArcoIris.turquesa
}

const fernanda: pessoa = {
    nome: "Fernanda",
    idade: 35,
    corFavorita: CoresArcoIris.verde
}

// Exercício 02
// function operacoes(a: number, b: number): void{
//     let soma: number = a + b
//     let subtracao: number = a - b
//     let multiplicacao: number = a * b
//     let maior: number
//     if(a > b){
//         maior = a
//     }else{
//         maior = b
//     }

//     console.log(soma, subtracao, multiplicacao, maior)
// }

// operacoes(3, 5)


// Exercício 03
// type result = {
//     qtd: number,
//     impares: number[]
//     soma: number
// }

// function exec03(array: number[]): result | void{
//     const qtd: number = array.length
//     const impares: number[] = array.filter(impar => {
//         return impar%2 !== 0
//     })
//     let soma: number = 0
//     array.map(valor => {
//         soma = soma + valor
//     })
//     return {
//         qtd: qtd,
//         impares: impares,
//         soma: soma
//     }
// }


// console.log(exec03([1, 5, 3, 5, 11, 5, 2, 4]))

// Exercicio 04
// type post = {
//     nome: string,
//     texto: string,
// }
// const posts: post[] | string = [
//     {
//         nome: "Melissa",
//         texto: "Olá"
//     },
//     {
//         nome: "Icaro",
//         texto: "Teste"
//     }
// ]
// function escolheAutor(postsFiltrados: post[], autorEscolhido: string): string[] | post[]{
//     const filtro: post[] = postsFiltrados.filter(post => {
//         return post.nome === autorEscolhido
//     })
//     return filtro
// }
// console.log(escolheAutor(posts, "Melissa"))

// Exercicio 05

enum Era {
    ac = "AC",
    dc = "DC"
}

function mostraEra(ano: number, era?: Era): string{
    let identificaEra: Era = era
    if(era === undefined){
        identificaEra = Era.dc
    }else{
        identificaEra = era
    }

    if(identificaEra === "AC"){
        if(ano > 4000){
            return "Pré-Histórica"
        }else{
            return "Idade Antiga"
        }
    }else{
        if(ano < 476){
            return "Idade Antiga"
        }else if(ano >= 476 && ano < 1453){
            return "Idade Média"
        }else{
            return "Idade Contemporânea"
        }
    }
}

console.log(mostraEra(400, Era.ac))
console.log(mostraEra(400, Era.dc))
console.log(mostraEra(5000, Era.ac))
console.log(mostraEra(2020, Era.dc))
console.log(mostraEra(1, Era.dc))
console.log(mostraEra(500, Era.dc))
console.log(mostraEra(1, Era.ac))