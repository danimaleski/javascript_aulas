//array
let frutas = ['Maça', 'Banana', 'Melancia']
console.log(frutas.length)

let primeiraFruta = frutas[0]
console.log(primeiraFruta)

//let ultimaFruta = frutas[2]
let ultimaFruta = frutas[frutas.length - 1]
console.log(ultimaFruta)

//mostrar a lista
frutas.forEach((fruta) => {
    console.log(fruta)
})

//existem dois modos de função
// frutas.forEach(function(fruta){
//     console.log(fruta)
// })

//adicionar na minha lista
frutas.push('Pera')

//remover o ultimo item da minha lista
frutas.pop()

//_____________________________________________________________

//método json para javascript
//para tráficos de dados não acaba sendo válido usar dessa forma

var jsonJS = [
    {
        "nome": function(){
            return 'João'
        },
        "idade": "42" 
    },
    {
        "nome": "Maria",
        "idade": 25
    }
]
console.log(jsonJS)
console.log(jsonJS[0].nome)


//agora como seria utilizar json puro para tráfico de comunicação em rest

const jsonRest = {
    "nome": "Daniel",
    "idade": 25
}
console.log(jsonRest)

//transforma meu objeto em uma string e acaba ignorando o trecho da função
console.log(JSON.stringify(jsonJS))

//transformando o texto em objeto novamente
const texto = '[{"idade": "42"}, {"nome": "Maria", "idade":25}]'
console.log(JSON.parse(texto))


