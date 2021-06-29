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
   console.log ("Boas vindas ao jogo de Blackjack!")
    if(confirm("Deseja iniciar uma nova rodada?")) {

      const cartasusuario = [comprarcarta(), comprarcarta()]
      const cartascomputador = [comprarcarta(), comprarcarta()]
      cartasusuario.push(comprarcarta(J), comprarcarta(K))
      cartascomputador.push(comprarcarta(5), comprarcarta(K))
   
      console.log (cartasusuario, cartascomputador)

    } else {console.log ("O jogo acabou!")
   
   }
