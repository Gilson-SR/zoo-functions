const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test(
    'Testa caso não receba argumentos, função retorna todos os dias e horários',
    () => {
      expect(getOpeningHours()).toEqual({
        Tuesday: { open: 8, close: 6 },
        Wednesday: { open: 8, close: 6 },
        Thursday: { open: 10, close: 8 },
        Friday: { open: 10, close: 8 },
        Saturday: { open: 8, close: 10 },
        Sunday: { open: 8, close: 8 },
        Monday: { open: 0, close: 0 },
      });
    },
  );
  test('Testa se função ao receber como parâmetro a string Monday, sempre retornará The zoo is closed', () => {
    expect(getOpeningHours('Monday', '08:00-AM')).toBe('The zoo is closed');
  });
  test('Testa função que retorna se zoo está em funionamento', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
    expect(getOpeningHours('Saturday', '10:00-PM')).toBe('The zoo is closed');
  });
  test('Testa se função retorna erro se hora passada como parâmetro para função não tiver valores entre 0 e 12', () => {
    expect(() => getOpeningHours('Wednesday', '23:00-AM')).toThrowError(/^The hour must be between 0 and 12$/);
  });
  test('Testa se retorna um erro se os minutos passados como parâmetros a função não tiver valores entre 0 e 59', () => {
    expect(() => getOpeningHours('Wednesday', '09:89-AM')).toThrowError(/^The minutes must be between 0 and 59$/);
  });
  test('Testa se o dia passado a função é um dia válido', () => {
    expect(() => getOpeningHours('Test', '04:00-PM')).toThrowError(/^The day must be valid. Example: Monday$/);
  });
  test('Testa se a função retorna um erro, caso a formatação do horário esteja incorreta', () => {
    expect(() => getOpeningHours('Friday', '09:00-OM')).toThrowError(/^The abbreviation must be 'AM' or 'PM'$/);
  });
  test('Testa se função retorna erro, caso o horário não possua apenas números', () => {
    expect(() => getOpeningHours('Wednesday', 'X8:06-AM')).toThrowError(/^The hour should represent a number$/);
    expect(() => getOpeningHours('Thursday', '10:S0-AM')).toThrowError(/^The minutes should represent a number$/);
  });
});
