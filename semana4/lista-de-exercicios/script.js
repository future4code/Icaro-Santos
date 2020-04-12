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