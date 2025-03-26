import { calculator } from "./calculator";

test('add', () => {
    expect(calculator.add(2 , 2)).toBe(4);
});

test('substract', () => {
    expect(calculator.substract(2 , 2)).toBe(0);
    expect(calculator.substract(8 , 4)).toBe(4);
});

test('divide', () => {
    expect(calculator.divide(2 , 2)).toBe(1);
    expect(calculator.divide(10 , 5)).toBe(2);
    expect(calculator.divide(63 , 3)).toBe(21);
});

test('multiply', () => {
    expect(calculator.multiply(2 , 4)).toBe(8);
    expect(calculator.multiply(12 , 4)).toBe(48);
    expect(calculator.multiply(9 , 9)).toBe(81);
});