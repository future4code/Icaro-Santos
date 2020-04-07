// Enunciado 01
// const minhaFuncao = (quantidade) => {
// 	const array = []
// 	for(let i = 0; i < quantidade; i+=2) {
// 			for(let j = 0; j < i; j++) {
// 				array.push(j)
// 			}
// 	}
// 	return array
// }
// Perguntas:
// a. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(2)`
// b. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(5)`
// c. Indique qual será o resultado da função caso ela seja chamada como `minhaFuncao(8)`
// Respostas: 
// a. O resultado será 0, pois fará o primeiro for somente uma vez.
// b. O resultado será 0, 1, 0, 1, 2, 3.
// b. O resultado será 0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5.

// Enunciado 02
// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const funcao = (lista, nome) => {
//   for (let i = 0; i < lista.length; i++) {
//     if (lista[i] === nome) {
//       return i;
//     }
//   }
// };

// console.log(funcao(arrayDeNomes, "Darvas"));
// console.log(funcao(arrayDeNomes, "João"));
// console.log(funcao(arrayDeNomes, "Paula"));
// Perguntas:
// a. Explicite quais são as saídas impressas no console
// b. O código funcionaria se a `lista` fosse um array de números (ao invés de um array de `string`)  e o `nome` fosse um número, ao se chamar a função? Justifique sua resposta.
// Respostas: 
// a. 0, 2, undefined.
// b. Sim, funcionaria. O código acima é um algoritmo de busca, que serve basicamente para você ver se o valor procurado está dentro do array.

// Enunciado 03
// function metodo(array) {
//     let resultadoA = 0;
//     let resultadoB = 1;
//     let arrayFinal = [];
  
//     for (let x of array) {
//       resultadoA += x;
//       resultadoB *= x;
//     }
  
//     arrayFinal.push(resultadoA);
//     arrayFinal.push(resultadoB);
//     return arrayFinal;
//   }
// Perguntas:
// O código acima mostra uma função que recebe um array e devolve outro array. Explique rapidamente o que ela faz e sugira um nome melhor para ela!
// Respostas:
// Ele devolve dois resultados em um novo array, que seria a soma de todos os números, e a multiplicação de todos os números. Um nome melhor para este array seria somaMult(array)

// Escrita 04
// function idadeCachorro(idadeHumano){
//     return idadeCachorro = idadeHumano * 7;
// }
// function concatenar(nome, idade, endereco, estudante){
//     if (estudante === true){
//         return ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + "sou estudante");
//     }else{
//         return ("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereco + " e " + "não sou estudante");
//     }
// }
// console.log(concatenar("Icaro", 23, "Estrada dos alvarenga", true));

// Escrita 05
// function seculo(ano){
//     let verificaSeculo = "";
//     if(ano > 2000){
//         verificaSeculo = "XXI";
//     }
//     else if (ano > 1900){
//         verificaSeculo = "XX";
//     }   
//     else if (ano > 1800){
//         verificaSeculo = "XIX";
//     }
//     else if (ano > 1700){
//         verificaSeculo = "XVIII";
//     }
//     else if (ano > 1600){
//         verificaSeculo = "XVII";
//     }
//     else if (ano > 1500){
//         verificaSeculo = "XVI";
//     }
//     else if (ano > 1400){
//         verificaSeculo = "XV";
//     }
//     else if (ano > 1300){
//         verificaSeculo = "XIV";
//     }
//     else if (ano > 1200){
//         verificaSeculo = "XIII";
//     }
//     else if (ano > 1100){
//         verificaSeculo = "XII";
//     }
//     else if (ano > 1000){
//         verificaSeculo = "XI";
//     }
//     else if (ano > 900){
//         verificaSeculo = "X";
//     }
//     else if (ano > 800){
//         verificaSeculo = "IX";
//     }
//     else if (ano > 700){
//         verificaSeculo = "VIIO";
//     }
//     else if (ano > 600){
//         verificaSeculo = "VIO";
//     }
//     else if (ano > 500){
//         verificaSeculo = "VI";
//     }
//     else if (ano > 400){
//         verificaSeculo = "V";
//     }
//     else if (ano > 300){
//         verificaSeculo = "IV";
//     }
//     else if (ano > 200){
//         verificaSeculo = "III";
//     }
//     else if (ano > 100){
//         verificaSeculo = "II";
//     }
//     else if (ano >= 0){
//         verificaSeculo = "I";
//     }
//     return "O ano " + ano + " pertence ao seculo " + verificaSeculo;
// }
// console.log(seculo(1534));

// Escrita 06
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function qtdArray(array){
//     return array.length;
// }

// function boolImparPar(a){
//     if (a !== undefined){
//         if (a%2 === 0){
//             return true;
//         }else{
//             return false;
//         }
//     }
// }

// // function imparPar(array){
// //     let qtdPares = 0;
// //     for (i = 0; i < qtdArray(array); i++){
// //         if (array[i]%2 === 0){
// //            qtdPares++;
// //         }
// //     }
// //     return qtdPares;
// // }

// function imparPar(array){
//     let qtdPares = 0;
//     for (i = 0; i < qtdArray(array); i++){
//         if (boolImparPar(array[i]) === true){
//            qtdPares++;
//         }
//     }
//     return qtdPares;
// }

// console.log(imparPar(array));