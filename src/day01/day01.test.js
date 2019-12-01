const part1 = require('./part1');
const part2 = require('./part2');
const solution = require('./solution');

describe('Day 1 Part 1', () => {
  test('Fuel required for mass of 12 is 2', () => {
    expect(part1.calculateFuelSum(12)).toBe(2);
  });

  test('Fuel required for mass of 14 is 2', () => {
    expect(part1.calculateFuelSum(14)).toBe(2);
  });

  test('Fuel required for mass of 1969 is 654', () => {
    expect(part1.calculateFuelSum(1969)).toBe(654);
  });

  test('Fuel required for mass of 100756 is 33583', () => {
    expect(part1.calculateFuelSum(100756)).toBe(33583);
  });

  test('Fuel required for masses of 12 is 2', () => {
    expect(part1.calculateFuelSums([12], part1.calculateFuelSum)).toBe(2);
  });

  test('Fuel required for masses of 12 and 14 is 4', () => {
    expect(part1.calculateFuelSums([12, 14], part1.calculateFuelSum)).toBe(4);
  });

  test('Fuel required for masses of 1969 and 100756 is 34237', () => {
    expect(part1.calculateFuelSums([1969, 100756], part1.calculateFuelSum)).toBe(34237);
  });

  test('Solution is 3456641', () => {
    expect(solution.solvePart1()).toBe(3456641);
  });
});

describe('Day 1 Part 2', () => {
  test('Actual fuel required for mass of 14 is 2', () => {
    expect(part2.calculateFuelSum(14)).toBe(2);
  });

  test('Actual fuel required for mass of 1969 is 966', () => {
    expect(part2.calculateFuelSum(1969)).toBe(966);
  });

  test('Actual fuel required for mass of 100756 is 50346', () => {
    expect(part2.calculateFuelSum(100756)).toBe(50346);
  });

  test('Solution is 5182078', () => {
    expect(solution.solvePart2()).toBe(5182078);
  });
});
