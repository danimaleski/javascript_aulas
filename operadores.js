/*
    + Adição
    - Subtração
    * Multiplicaçãpo
    / Divisão
    ** Exponenciação
    % Módulo
    ++ Incremento
    -- Decremento

*/

//operação de atribuição
let x = 0, y = 1

x = x + y
x += y

x = x - y
x -= y

x *= y
x /= y
x %= y

x **= y
x = x ** y

if (x == y){
    //comparação
}

/*
    == igualdade
    === valor igual e tipo igual
    != diferente
    !== diferente valor ou tipo
    > maior
    < menor
    >= maior igual
    <= menor igual
    ? ternário

*/

if (1 === '1'){
    console.log('valido')
} else {
    console.log('invalido')
}

//ternário
1 == '1' ? console.log ('válido') : console.log('inválido')

/*
    && E lógico
    || OU lógico
    ! negação
*/

//&& ou ||
1 === '1' || 1 == '1' ? console.log ('válido') : console.log('inválido')

//!
!(1 === '1') && 1 == '1' ? console.log ('válido') : console.log('inválido')
