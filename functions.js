//retorna algum valor, declaraçao usando a palavra function, pode ser incluido parametros
function ola(){
    return 'ola'
}

function oi(param){
    return `Oi' ${param}`
}
console.log(oi('mundo'));

//função que nao possui nome e executada assim que criada - função anônima
// se não houver parametros, não precisa passar nada
(function (param){
    console.log(param)
})('ola auto')

//atribuir a uma variável
var ola = function ola(param){
    return `Oi' ${param}`
}
console.log(ola('hello world'))

//arrow functions
const dobro = (valor) => {
    return valor * 2
}
console.log(dobro(4))

const dobro2 = valor => valor * 2
console.log(dobro2(4))

let hello = () => console.log('hello')
hello()

let hello2 = _ => console.log('hello')
hello2()

const adiciona = (a, b, c) => a + b + c
console.log(adiciona(1,2,3))

//atribuições com valores default
const multiplica = (a = 2, b = 3, c = 1) => a * b * c
console.log(multiplica(2,2,2))
console.log(multiplica(2,3))
console.log(multiplica(5))

