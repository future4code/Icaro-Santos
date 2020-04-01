// Interpretação 01
// let sum = 0
// for(let i = 0; i < 15; i++) {
//   sum += i
// }
// console.log(sum)
// Pergunta: O que o código abaixo está fazendo? Qual o resultado impresso no console? 
// Resposta: Ele está somando os valores de 0 até 14. O resultado é 105.

// Interpretação 02
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// const novaLista = []
// const numero = 5
// for(const item of lista){
//   if(item%numero === 0) {
//     novaLista.push(item)
//   }
// }
// console.log(novaLista)
// Perguntas:
// a. O que o comando `.push` faz?
// b. Qual o valor impresso no console?
// c. Qual **seria** imprimido no console se a variável `numero` tivesse o valor de `3`? E se tivesse o valor de `4`?
// Respostas:
// a. O comando push adiciona um novo item a uma array
// b. Um array de 4 numeros, 10, 15, 25, 30;
// c. Valor 3 = 12, 15, 18, 21, 27, 30
//    Valor 4 = 12

// Interpretação Desafio 01
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Pergunta: Qual seria o resultado impresso no console, se o usuário digitasse o número 4?
// Resposta: Seriam quatro linhas com números zeros, a primeira linha teria um zero, a segunda dois zeros, e assim por diante. Ficaria assim:
// 0
// 00
// 000
// 0000

// Escrita 03
// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// Programa 01
// let numeroMaior = array[0];
// let numeroMenor = array[0];
// for (let i = 0; i < array.length; i++){
//     const valor = array[i];
//     if (valor > numeroMaior){
//         numeroMaior = valor;
//     }
//     if (valor < numeroMenor){
//         numeroMenor = valor;
//     }
// }
// console.log("O número maior é " + numeroMaior + " e o número menor " + numeroMenor);

// Programa 02
// let newArray = [];
// for (i = 0; i < array.length; i++){
//     newArray.push(array[i] / 10);
// }
// console.log(newArray);

// Programa 03
// let newArray = [];
// for (i = 0; i < array.length; i++){
//     const valor = array[i];
//     if (valor%2 === 0){
//         newArray.push(valor);
//     }
// }
// console.log(newArray);

// Programa 04
// let newArray = [];
// for (let i = 0; i < array.length; i++){
//     newArray.push("O elemento do índex " + i + " é: " + array[i]);
// }
// console.log(newArray)

// Desafio escrita 02
// const numJogador1 = Number(prompt("O primeiro jogador deve digitar um número"));
// console.log("Vamos jogar!!");
// let numJogador2 = Number(prompt("Segundo jogador: Digite um número"));
// let tentativas = 0;

// while (numJogador1 !== numJogador2){
//     if(numJogador1 > numJogador2){
//         console.log("Errou, é maior");
//     }else{
//         console.log("Errou, é menor");
//     }
//     console.log("O número chutado foi: " + numJogador2);
//     numJogador2 = Number(prompt("Segundo jogador: Digite um número"));
//     tentativas++;
// }
// console.log("Acertou");
// console.log("O número de tentativas foi: " + tentativas);

// Desafio escrita 03
let numeroAleatorio = Number(Math.floor(Math.random() * 100) + 1);
console.log("Vamos jogar!");
 let numJogador2 = Number(prompt("Digite um número"));
 let tentativas = 0;

while (numeroAleatorio !== numJogador2){
    if(numeroAleatorio > numJogador2){
        console.log("Errou, é maior");
    }else{
        console.log("Errou, é menor");
    }
    console.log("O número chutado foi: " + numJogador2);
    numJogador2 = Number(prompt("Digite um número"));
    tentativas++;
}
console.log("Acertou");
console.log("O número de tentativas foi: " + tentativas);

// Pela forma que escrevi o código foi bem fácil de fazer pois só precisei alterar o nome da variável do jogador um, e colocar a sinxtaxe do código randômico para que o próprio js gerasse um número aleatório de 1 a 100