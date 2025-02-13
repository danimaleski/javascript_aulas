//permite texto com aspas e concatenando outros valores
let texto1 = "texto com aspas" + "outro texto com aspas"

//usar aspas simples pode facilitar caso precise utilizar aspas duplas
//quando utiliza aspas duplas e tentar utilizar novamente dentro do próprio texto é necessário utilizar \"texto"\ para que funcione
let texto2 = 'texto com "aspas"' + texto1

//é permitido também outra forma que permite os exemplos anteriores e colocar variáveis, deixando de forma mais clean
let texto3 = `texto 3 "com aspas", 'apostrofo' e ${texto2} e mais outro texto`
//${variável}

console.log(texto3)

