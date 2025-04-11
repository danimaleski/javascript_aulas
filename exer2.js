// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.

// Pegando somente os índices

function indices(array){

    let max = 0;
    let min = 0;

    for (let i = 0; i < array.length; i++) {
        const auxiliar = array[i];

        if (auxiliar > array[max]){
            max = i;
        }

        if (auxiliar < array[min]){
            min = i;
        }
    }

    return { max, min };

}

console.log(indices([-3, 2, 7, 10, 5]));
console.log(indices([0, 4, 9]))
console.log(indices([2, 7, -1, 19, 25]))
console.log(indices([]));


//Pegando os valores maiores e menores e seus índices através das funções específicas do JS. 


/*var estrut = [15, 3, 54.90, -7, 500];
var max = Math.max.apply(null, estrut) 
var min = Math.min.apply(null, estrut)

console.log(max);
console.log(estrut.indexOf(max));

console.log(min)
console.log(estrut.indexOf(min));*/
