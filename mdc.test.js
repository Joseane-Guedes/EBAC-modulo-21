const mdc = require('./mdc'); // Supondo que o arquivo mdc.js esteja na mesma pasta

it('mdc de dois números positivos', () => {
  expect(mdc(48, 18)).toBe(6);
});

it('mdc de números com um sendo zero', () => {
  expect(mdc(48, 0)).toBe(48);
  expect(mdc(0, 18)).toBe(18);
});


it('mdc de números iguais', () => {
  expect(mdc(10, 10)).toBe(10);
});

it('mdc de números primos entre si', () => {
  expect(mdc(7, 11)).toBe(1);
});