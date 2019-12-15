import IntcodeComputer from './IntcodeComputer';

describe('Day 5 Part 1', () => {
  it('The program 3,0,4,0,99 outputs whatever it gets as input (1), then halts', () => {
    const computer = new IntcodeComputer([3, 0, 4, 0, 99]);
    const results = computer.run();
    expect(results).toStrictEqual([1, 0, 4, 0, 99]);
    expect(computer.outputs).toStrictEqual([1]);
  });

  it('Should handle program with parameters of 1002', () => {
    const computer = new IntcodeComputer([1002, 4, 3, 4, 33]);
    expect(computer.run()).toStrictEqual([1002, 4, 3, 4, 99]);
  });

  it('Should handle program with parameters of 1002', () => {
    const computer = new IntcodeComputer([1001, 4, 3, 4, 96]);
    expect(computer.run()).toStrictEqual([1001, 4, 3, 4, 99]);
  });

  it('1101,100,-1,4,0 is a valid program', () => {
    const computer = new IntcodeComputer([1101, 100, -1, 4, 0]);
    expect(computer.run()).toStrictEqual([1101, 100, -1, 4, 99]);
  });

  it('3,9,8,9,10,9,4,9,99,-1,8 - Using position mode, consider whether the input is equal to 8; output 1 (if it is) or 0 (if it is not).',
    () => {
      const computer = new IntcodeComputer([3, 9, 8, 9, 10, 9, 4, 9, 99, -1, 8]);
      computer.input = 8;
      computer.run();
      expect(computer.outputs).toStrictEqual([1]);
    });

  it('3,9,7,9,10,9,4,9,99,-1,8 - Using position mode, consider whether the input is less than 8; output 1 (if it is) or 0 (if it is not).',
    () => {
      const computer = new IntcodeComputer([3, 9, 7, 9, 10, 9, 4, 9, 99, -1, 8]);
      computer.input = 7;
      computer.run();
      expect(computer.outputs).toStrictEqual([1]);
    });

  it('3,3,1108,-1,8,3,4,3,99 - Using immediate mode, consider whether the input is equal to 8; output 1 (if it is) or 0 (if it is not).',
    () => {
      const computer = new IntcodeComputer([3, 3, 1108, -1, 8, 3, 4, 3, 99]);
      computer.input = 8;
      computer.run();
      expect(computer.outputs).toStrictEqual([1]);
    });

  it('3,3,1107,-1,8,3,4,3,99 - Using immediate mode, consider whether the input is less than 8; output 1 (if it is) or 0 (if it is not).',
    () => {
      const computer = new IntcodeComputer([3, 3, 1107, -1, 8, 3, 4, 3, 99]);
      computer.input = 7;
      computer.run();
      expect(computer.outputs).toStrictEqual([1]);
    });

  it('3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9 (using position mode) that take an input, then output 0 if the input was zero or 1 if the input was non-zero:',
    () => {
      const computer = new IntcodeComputer([3, 12, 6, 12, 15, 1, 13, 14,
        13, 4, 13, 99, -1, 0, 1, 9]);
      computer.input = 1;
      computer.run();
      expect(computer.outputs).toStrictEqual([1]);
    });

  it(' The program will then output 999 if the input value is below 8, output 1000 if the input value is equal to 8, or output 1001 if the input value is greater than 8.',
    () => {
      const computer = new IntcodeComputer([3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31,
        1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104,
        999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99]);
      computer.input = 7;
      computer.run();
      expect(computer.outputs).toStrictEqual([999]);
    });
});

describe('The Intcode computer should run the same as Day 2', () => {
  it.each([
    [[1, 0, 0, 0, 99], [2, 0, 0, 0, 99]],
    [[2, 3, 0, 3, 99], [2, 3, 0, 6, 99]],
    [[2, 4, 4, 5, 99, 0], [2, 4, 4, 5, 99, 9801]],
    [[1, 1, 1, 4, 99, 5, 6, 0, 99], [30, 1, 1, 4, 2, 5, 6, 0, 99]],
    [[1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50], [3500, 9, 10, 70, 2, 3, 11, 0, 99, 30, 40, 50]]])(
    'intcode program %s becomes %s', (n, expected) => {
      const computer = new IntcodeComputer(n);
      expect(computer.run()).toStrictEqual(expected);
    },
  );
});
