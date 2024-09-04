//Calcule o MDC (máximo divisor comum) entre dois números.

function mdc(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

module.exports = mdc;
// Exemplo de uso
console.log(mdc(48, 18)); // Saída: 6