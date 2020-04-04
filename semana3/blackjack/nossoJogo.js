console.log("Bem vindo ao jogo de blackjack!");

if(confirm("Quer iniciar uma rodada?")){
   let carta = comprarCarta();
   const carta1Usuario = carta;
   carta = comprarCarta();
   const carta2Usuario = carta;

   carta = comprarCarta();
   const carta1PC = carta;
   carta = comprarCarta();
   const carta2PC = carta;
   
   const valorUsuario = carta1Usuario.valor + carta2Usuario.valor;
   const valorPC = carta1PC.valor + carta2PC.valor;

   console.log("Usuário - Cartas " + carta1Usuario.texto + " " + carta2Usuario.texto + " - pontuação " + valorUsuario);
   console.log("Computador - Cartas " + carta1PC.texto + " " + carta2PC.texto + " - pontuação " + valorPC);

   if (valorUsuario > valorPC){
      console.log("O Usuário Ganhou!");
   }else if(valorPC > valorUsuario){
      console.log("O Computador ganhou!");
   }else{
      console.log("Empate!");
   }
}else{
   console.log("O jogo acabou");
}

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */