const indicesExtremos = require('./array'); 
describe('indicesExtremos', () => {
    it('retorna os índices do maior e menor valor em um array com múltiplos elementos', () => {
        const numeros = [10, 5, 20, 15, 8];
        const resultado = indicesExtremos(numeros);
        expect(resultado.maior).toBe(2);
        expect(resultado.menor).toBe(1);
    });

    it('retorna {maior: -1, menor: -1} para um array vazio', () => {
        const numeros = [];
        const resultado = indicesExtremos(numeros);
        expect(resultado.maior).toBe(-1);
        expect(resultado.menor).toBe(-1);
    });

    it('retorna {maior: 0, menor: 0} para um array com um único elemento', () => {
        const numeros = [7];
        const resultado = indicesExtremos(numeros);
        expect(resultado.maior).toBe(0);
        expect(resultado.menor).toBe(0);
    });
});
