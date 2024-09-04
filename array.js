//Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
function indicesExtremos(arr) {
    if (arr.length === 0) return { maior: -1, menor: -1 };

    return arr.reduce((acc, value, index) => {
        if (value > arr[acc.maior]) {
            acc.maior = index;
        }
        if (value < arr[acc.menor]) {
            acc.menor = index;
        }
        return acc;
    }, { maior: 0, menor: 0 });
}

module.exports = indicesExtremos;

// Exemplo de uso
const numeros = [10, 5, 20, 15, 8];
const indices = indicesExtremos(numeros);

console.log(`Índice do maior valor: ${indices.maior}`); // Saída: 2
console.log(`Índice do menor valor: ${indices.menor}`); // Saída: 1