// MDC
// Calcule o MDC (Máximo Divisor Comum) entre dois números. 

function mdc(a, b) {
    var resto;

    while ((a % b) != 0) {
        resto = a % b
        a = b;
        b = resto;
    }
    return b;
}

console.log(mdc(41,14));
console.log(mdc(14,8));
console.log(mdc(24,9));
console.log(mdc(85, 45));
console.log(mdc(21,14));
console.log(mdc(30, 10));






