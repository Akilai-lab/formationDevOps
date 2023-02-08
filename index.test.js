import {add, subtract, multiply, divide} from './index';

describe('maths module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });
  test('subtract 1 - 2 to equal 1', () => {
    expect(subtract(1, 2)).toBe(7);
  });
  test('multiply 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toBe(2);
  });
  test('divide 10 / 2 to equal 10', () => {
    expect(divide(10, 2)).toBe(10);
  });
  test('divide 10 / 0 cannot divide by zero', () => {
    expect(()=>divide(10, 0).toThrow('Cannot divide by zero'));
  });
});
