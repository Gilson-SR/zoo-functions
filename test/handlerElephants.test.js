const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa se a função retorna undefined caso não receba parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  test('Testa se função retorna \'Parâmetro inválido, é necessário uma string\' caso o parâmetro não seja uma string', () => {
    expect(handlerElephants(0)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('Testa se função retorna a quantidade de elefantes, ao passar o parâmetro count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se função retorna array com todos os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('Testa se função retorna idade médias dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  test('Testa se função retorna região relacionada aos elefantes', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('Testa se função retorna null', () => {
    expect(handlerElephants('abc')).toBeNull();
  });
});
