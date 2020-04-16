// Aula 14 - DOM
// Leitura de código
// 1. Digamos que a cotação seja 4,2. Então o valor mostrado no console seria 420;
// 2. Primeira mensagem seria 165. Segunda não apareceria nada, somente um alert dizendo TIPO DE INVESTIMENTO INFORMADO INCORRETO!
// 3. Quantidade total de números 14. Depois somente os números pares que seriam 6 numeros. Depois impares 8.
// 4. Infinity. E no segundo console.log seria 1590.

// Lógica de programação
// Exercício 1
// a. false
// b. true
// c. true
// d. true
// e. true

//Exercício 2
// O código não funciona, para funcionar deveria ficar da seguinte forma: 
// const quantidadeDeNumerosPares;
// let i = 0;
// while(i <= quantidadeDeNumerosPares) {
//   console.log(i*2);
//   i++;
// }

// Exercício 3
// function triangulo(a, b, c){
//     if(a === b === c){
//         return "Equilátero";
//     }else if(a === b || b === c){
//         return "Isósceles";
//     }else{
//         return "Escaleno";
//     }
// }

// Exercício 4
// function maior(a, b){
//     if(a > b){
//         return a;
//     }else{
//         return b;
//     }
// }
// function divisivel(a, b){
//     if (a%b === 0){
//         return a + " é divisivel por " + b;
//     }else{
//         return a + " não é divisível por " + b;
//     }
// }

// function diferenca(a, b){
//     if(a > b){
//         return a - b;
//     }else{
//         return b - a;
//     }
// }

// Aula 15 - Objetos, Strings e Arrays
// Exercícios de funções
// Exercício 1
// const arrayDeNumeros = [100,5,4,10,15];
// let valorMenor = arrayDeNumeros[0];
// let valorMaior = arrayDeNumeros[0];
// function maior(array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] > valorMaior){
//             valorMaior = array[i];
//         }
//     }
//     return valorMaior;
// }
// function menor(array){
//     for (let i = 0; i < array.length; i++){
//         if (array[i] < valorMenor){
//             valorMenor = array[i];
//         }
//     }
//     return valorMenor;
// }
// console.log(maior(arrayDeNumeros));
// console.log(menor(arrayDeNumeros));

// Exercício 2
// let hello = () => {
//     alert("Hello World!");
// }
// hello();

// Exercícios de objetos
// Exercício 01
// Podemos utilizar arrays e objetos quando queremos criar mais de um objeto com aquele mesmo "padrão" que criamos antes. Exemplo, digamos que eu queira criar alguns inputs, onde o usuário pode salvar seu input, e eu queira salvar todos eles. Eu posso criar uma array de objeto para sempre salvar num mesmo formato.
// Exercício 02
// function criaRetangulo(lado1, lado2){
//     return infos = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1 + lado2),
//         area: lado1*lado2
//     }
// }

// Exercício 03
// const filme = {
//     titulo: "Qualquer coisa",
//     ano: 2020,
//     diretor: "Icaro, o lindo",
//     atores: ["João", "Melissa", "Mais alguem"]
// }
// function imprimeArrayAtores(array){
//     for(const i of array){
//         if(array !== undefined){
//             return String(array);
//         }else{
//             return String(i);
//         }      
//     }
// }
// console.log("Venha assistir ao filme ", filme.titulo, " do ano ", filme.ano, " digirido por ", filme.diretor, " estrelado por", imprimeArrayAtores(filme.atores));

//Exercício 04
// let pessoa = {
//     nome: "Icaro",
//     idade: 23,
//     email: "icaro.ssantos96@gmail.com",
//     endereco: "Estrada dos Alvarenga 10.059"
// }

// function anonimizarPessoa(){
//     const pessoaAnonima = {
//         ...pessoa,
//         nome: "Anonimo"
//     }
// }

// Aula 16 - Callback e funções de array
// Exercício 01
// For, while e for of...
// Exercício 02
// a. 
// const soAdultos = pessoas.filter((pessoa, idx, array) => {
//     return pessoa.idade >= 18;
// })
// b.
// const soCriancas = pessoas.filter((pessoa, idx, array) =>{
//     return pessoa.idade < 18;
// })
// console.log(soCriancas);
// Exercício 03
// a.
// const arrayMult = array.map((num, idx, arr) => {
//     return num * 2;
// })
// b.
// const arrayTrip = array.map((num, idx, arr) => {
//     return String(num*2);
// })
// c.
// const parImpar = array.map((num, idx, arr) => {
//     if (num%2 === 0){
//         return `${num} é par`;
//     }
//     if (num%2 !== 0){
//         return `${num} é impar`;
//     }
// })
// Exercício 04
// a.
// const podemEntrar = pessoas.filter((pessoa, idx, arr) =>{
//     return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5;
// })
// b.
// const naoPodemEntrar = pessoas.filter((pessoa, idx, arr) => {
//     return pessoa.idade >= 60 || pessoa.idade <= 14 || pessoa.altura < 1.5;
// })

// Exercício 05
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    { nome: "Icaro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const naoCanceladoHomem = consultas.filter((consulta, idx, arr) => {
    return !consulta.cancelada && consulta.genero === "masculino";
})
const canceladoHomem = consultas.filter((consulta, idx, arr) => {
    return consulta.cancelada && consulta.genero === "masculino";
})

const naoCanceladoMulher = consultas.filter((consulta, idx, arr) =>{
    return !consulta.cancelada && consulta.genero === "feminino";
})

const canceladoMulher = consultas.filter((consulta, idx, arr) =>{
    return consulta.cancelada && consulta.genero === "feminino";
})

for (let i in naoCanceladoHomem){
    console.log(`Olá, Sr ${naoCanceladoHomem[i].nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ naoCanceladoHomem[i].dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
}

for (let i in canceladoHomem){
    console.log(`Olá, Sr ${canceladoHomem[i].nome}. Infelizmente, sua consulta marcada para o dia ${ canceladoHomem[i].dataDaConsulta } foi cancelada. Se quiser pode entrar em contato conosco para remarcá-la.`)
}

for (let i in naoCanceladoMulher){
    console.log(`Olá, Sra. ${naoCanceladoMulher[i].nome}. Estamos enviando esta mensagem para lembrá-lo da sua consulta no dia ${ naoCanceladoMulher[i].dataDaConsulta }. Por favor, acuse o recebimento deste e-mail.`)
}

for (let i in canceladoMulher){
    console.log(`Olá, Sra. ${canceladoMulher[i].nome}. Infelizmente, sua consulta marcada para o dia ${ canceladoMulher[i].dataDaConsulta } foi cancelada. Se quiser pode entrar em contato conosco para remarcá-la.`)
}