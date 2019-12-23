import IntcodeComputer from './IntcodeComputer';

describe('Day 9 Part 1', () => {
  it('Increase the relative base in immediate mode', () => {
    const input = [109, 19, 99];
    const computer = new IntcodeComputer(input);
    computer.run();
    expect(computer.relativeBase).toBe(19);
  });

  it('Increase the relative base in position mode', () => {
    const input = [9, 0, 99];
    const computer = new IntcodeComputer(input);
    computer.run();
    expect(computer.relativeBase).toBe(9);
  });

  it('Produces a quine', () => {
    const input = [109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99];
    const computer = new IntcodeComputer(input);
    computer.run();
    expect(computer.outputs)
      .toStrictEqual([109, 1, 204, -1, 1001, 100, 1, 100, 1008, 100, 16, 101, 1006, 101, 0, 99]);
  });

  it('Produces the number in the middle', () => {
    const input = [104, 1125899906842624, 99];
    const computer = new IntcodeComputer(input);
    computer.run();
    expect(computer.outputs).toStrictEqual([1125899906842624]);
  });
});
