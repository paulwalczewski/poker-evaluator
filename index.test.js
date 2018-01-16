import {hasThreeOfAKind} from './';

describe('Check cards for specific holdings', () => {
  // Tutaj test ktory sprawdza czy jest trojka. Obczaj package.js co odpala polecenie np test.
  // Takie podejscie (najpierw pisze sie test, a pozniej dopiero funkcje ktora go spelnia) nazywa sie TDD (test driven development.)
  // Do ukladania html-a itp jest beznadziejne, ale jest dobre do zadan tego typu gdzie jest funkcja ktora ma cos wziac (input) i cos zwrocic (output).
  // Skupianie sie na takich prostych funkcjach, ktore maja input i output nazywa sie functional programming i o to tez moga pytac.
  test('Checks for three of a kind', () => {
    expect(hasThreeOfAKind('2H 2S 2D 4C KH')).toBe(true);
    expect(hasThreeOfAKind('2H AC 2S 2D KH')).toBe(true);
    expect(hasThreeOfAKind('TH TC 2S TD KH')).toBe(true);
    expect(hasThreeOfAKind('2H 2S 2D 2C AC')).toBe(false);
    expect(hasThreeOfAKind('2H AC 2S 2D 2C')).toBe(false);
  });
});
