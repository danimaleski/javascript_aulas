var nome = 'Roberto'
console.log(nome)

//definir variável de outra forma dentro de um bloco, e ainda assim vai printar o valor do var

{
    var outroNome = 'João'
}
console.log(outroNome)

//valor imutável: constante = const
//caso queira que o valor não seja alterado, use const
//se colocar outro valor na variável, vai dar erro, como no exemplo abaixo

const constante = 0
//constante = 1
console.log(constante)

//caso queira utilizar uma variável que possa mudar o valor, usar o let

let nome2 = 'Joana'
console.log(nome2)

//quando utiliza o let dentro de um bloco e o console fora, não é identificado com let ou com const, ao contrário do var
{
    let outroNome2 = 'Maria'
    const outroNome3 = 'Alberto'
}
console.log(outroNome2)
console.log(outroNome3)



