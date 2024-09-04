const somaMultiplos = require('./multiplos');

describe('somaMultiplos', () => {
    it('retorna 0 para um limite menor ou igual a 1', () => {
        const resultado1 = somaMultiplos(1, [5, 7]);
        const resultado2 = somaMultiplos(0, [5, 7]);
        expect(resultado1).toBe(0);
        expect(resultado2).toBe(0);
    });

    it('retorna a soma dos múltiplos de 3 abaixo de 10', () => {
        const resultado = somaMultiplos(10, [3]);
        expect(resultado).toBe(18); // Múltiplos de 3 abaixo de 10 são 3, 6 e 9
    });

    it('retorna a soma dos múltiplos de 3 e 5 abaixo de 20', () => {
        const resultado = somaMultiplos(20, [3, 5]);
        expect(resultado).toBe(78); // Múltiplos de 3 ou 5 abaixo de 20 são 3, 5, 6, 9, 10, 12, 15 e 18
    });
});
