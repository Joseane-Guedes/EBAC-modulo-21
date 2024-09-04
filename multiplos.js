//Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
function somaMultiplos(limite, divisores) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
      if (divisores.some(divisor => i % divisor === 0)) {
        soma += i;
      }
    }
    return soma;
  }
  
  module.exports = somaMultiplos;

  // Exemplo de uso:
  const resultado = somaMultiplos(1000, [5, 7]);
  console.log(resultado);
