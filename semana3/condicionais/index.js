// Interpretação 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar?")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// Pergunta: Explique o que o código faz. Qual o teste que ele realiza? Para que tipos de números ele imprime no console "Passou no teste"? Para que tipos, a mensagem é "Não passou no teste"? 
// Resposta: O código acima pega o resto da divisão da variável número, caso o resto seja 0, ele faz o if, caso contrário faz o else
// O código usa o bloco de códigos do if para números pares, e o else para números impares.

// Interpretação 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM d.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// Pergunta:
// a. Para que serve o código acima?
// b. Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
// c. Considere que você vá ao mercado com o objetivo de comprar 2 laranjas, 1 maçã, 3 bananas e 1 uva. Qual seria o preço que você pagaria?
// d. Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `deafult` (o `break` indicado pelo comentário "BREAK PARA O ITEM d.")?
// Reposta A: Serve para analisar qual fruta o usuário digitou e imprimir o preco da fruta no console.
// Resposta B: O preço da fruta maçã é R$ 2.25
// Resposta C: (3.5 * 2) + 2.25 + (5 * 3) + 0.3 = 24.55
// Resposta D: O código funcionou e mostrou o que está no console normalmente, mas o certo seria dar algum tipo de erro, ou ficar sempre carregando.

// Interpretação 03
// const numero1 = prompt("Digite o primeiro número.")
// const numero2 = prompt("Digite o próximo número?")

// if(numero1 > 0 && numero2 > 0) {
//   let mensagem
//   if(numero1 > numero2) {
//     mensagem = "Número 1 é maior que o 2!"
//   } else {
//     mensagem = "Número 1 é menor ou igual ao 2!"
//   }
// }
// console.log(mensagem)
// Pergunta: Considere um usuário que digita os números 3 e 4 respectivamente. Qual será a mensagem do terminal? Haverá algum erro? Justifique usando os conceitos de bloco ou escopo.
// Resposta: Haverá um erro pois a variável chamada mensagem está apenas no bloco de código dos ifs.

//Escrita 04
// let numero1 = Number(prompt("Digite um número"));
// let numero2 = Number(prompt("Digite outro número"));
// let numero3 = Number(prompt("Digite mais um número"));

// if (numero1 > numero2 && numero1 > numero3){
//     if (numero2 > numero3){
//         console.log(numero1 + " " + numero2 + " " + numero3);
//     }else{
//         console.log(numero1 + " " + numero3 + " " + numero2);
//     }
// }else if(numero2 > numero1 && numero2 > numero3){
//     if(numero1 > numero3){
//         console.log(numero2 + " " + numero1 + " " + numero3);
//     }else{
//         console.log(numero2 + " " + numero3 + " " + numero1);
//     }
// }else if(numero3 > numero1 && numero3 > numero2){
//     if (numero1 > numero2){
//         console.log(numero3 + " " + numero1 + " " + numero2);
//     }else{
//         console.log(numero3 + " " + numero2 + " " + numero1);
//     }
// }else{
//     console.log("Não digite números iguais");
// }
// Na parte A do exercício quando os números eram iguais o programa não mostrava nada, assim como na segunda parte.

// Escrita 05
// let ossos = prompt("Tem ossos? [s/n]");
// if(ossos.toLowerCase() === "n"){
//     console.log("É um animal invertebrado");
// }else{
//     let pelos = prompt("Tem pelos? [s/n]");
//     if (pelos.toLowerCase() === "n"){
//         let penas = prompt("Possui penas? [s/n]");
//         if(penas.toLowerCase() === "n"){
//             let terrestre = prompt("É um animal terrestre? [s/n]");
//             if (terrestre.toLowerCase() === "n"){
//                 console.log("É um peixe");
//             }else{
//                 let tempoAgua = prompt("Passa muito tempo na água? [s/n]");
//                 if (tempoAgua.toLowerCase() === "n"){
//                     console.log("É um réptil");
//                 }else{
//                     console.log("É um Anfíbio");
//                 }
//             }
//         }else{
//             console.log("É uma ave");
//         }
//     }else{
//         let racional = prompt("É racional? [s/n]");
//         if (racional.toLowerCase === "n"){
//             console.log("É um mamífero não humano");
//         }else{
//             console.log("É um ser humano");
//         }
//     }
// }
// Link do diagrama: https://drive.google.com/open?id=1lXA7IHBqvDOtmlllVOySCsC-cY-qvBod

// Desafio
let nomeCompleto = prompt("Digite seu nome completo");
let tipoDeJogo = prompt("Digite o tipo de jogo [IN/DO]");
let etapa = prompt("Digite a etapa do jogo [SF/DT/FI]");
let categoria = Number(prompt("Digite qual categoria deseja"));
let qtd = Number(prompt("Digite a quantidade de ingressos"));
let ingresso = Number();

switch(tipoDeJogo.toLowerCase()){
    case "in":
        if (etapa.toLowerCase() === "sf"){
            switch(categoria){
                case 1:
                    ingresso = 1320 / 4.1;
                    break;
                case 2:
                    ingresso = 880 / 4.1;
                    break;
                case 3:
                    ingresso = 550 / 4.1;
                    break;
                case 5:
                    ingresso = 220 / 4.1;
                    break;
            }
            etapa = "Semi-final"
        }
        if (etapa.toLowerCase() === "dt"){
            switch(categoria){
                case 1:
                    ingresso = 660 / 4.1;
                    break;
                case 2:
                    ingresso = 440 / 4.1;
                    break;
                case 3:
                    ingresso = 330 / 4.1;
                    break;
                case 5:
                    ingresso = 170 / 4.1;
                    break;
            }
            etapa = "Decisão de Terceiro lugar";
        }
        if (etapa.toLowerCase() === "fi"){
            switch(categoria){
                case 1:
                    ingresso = 1980 / 4.1;
                    break;
                case 2:
                    ingresso = 1320 / 4.1;
                    break;
                case 3:
                    ingresso = 880 / 4.1;
                    break;
                case 5:
                    ingresso = 330 / 4.1;
                    break;
            }
            etapa = "Final";
        }
        console.log("------Dados de compra------\nNome do cliente:" + nomeCompleto + "\nTipo de Jogo: Internacional\nEtapa do Jogo: " + etapa + "\nCategoria: " + categoria + "\nQuantidade de ingressos: " + qtd + "\n------Valores------\nValor do ingresso: U$" + ingresso + "\nValor Total: U$" + ingresso*qtd);
        break;
    case "do":
        if (etapa.toLowerCase() === "sf"){
            switch(categoria){
                case 1:
                    ingresso = 1320;
                    break;
                case 2:
                    ingresso = 880;
                    break;
                case 3:
                    ingresso = 550;
                    break;
                case 5:
                    ingresso = 220;
                    break;
            }
            etapa = "Semi-final"
        }
        if (etapa.toLowerCase() === "dt"){
            switch(categoria){
                case 1:
                    ingresso = 660;
                    break;
                case 2:
                    ingresso = 440;
                    break;
                case 3:
                    ingresso = 330;
                    break;
                case 5:
                    ingresso = 170;
                    break;
            }
            etapa = "Decisão de Terceiro lugar";
        }
        if (etapa.toLowerCase() === "fi"){
            switch(categoria){
                case 1:
                    ingresso = 1980;
                    break;
                case 2:
                    ingresso = 1320;
                    break;
                case 3:
                    ingresso = 880;
                    break;
                case 5:
                    ingresso = 330;
                    break;
            }
            etapa = "Final";
        }
        console.log("------Dados de compra------\nNome do cliente:" + nomeCompleto + "\nTipo de Jogo: Doméstico\nEtapa do Jogo: " + etapa + "\nCategoria: " + categoria + "\nQuantidade de ingressos: " + qtd + "\n------Valores------\nValor do ingresso: R$" + ingresso + "\nValor Total: R$" + ingresso*qtd);
        break;
}