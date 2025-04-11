//Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. 
//A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.

function multiploSoma(){
    
    let multiple5 = 0;
    let multiple7 = 0;
    let soma = 0;
    
    // se colocar i <= value, os números que são iguais acabam sendo somados juntos. 
    for (let i = 0; i <= 50; i++) {
      if(i % 5 == 0 || i % 7 === 0){
        soma += i;
      }
        
    }
    console.log(soma);
}

console.log(multiploSoma());

