import { calculateThrusterSignal, calculateMaxThrusterSignal } from './part1';
import { solvePart1, solvePart2 } from './solution';

describe('Day 7 Part 1', () => {
  it('Max thruster signal of 43210 using all phases', () => {
    const input = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0';
    expect(calculateMaxThrusterSignal(input)).toBe(43210);
  });

  it('Thruster signal of 43210 with phase given', () => {
    const input = '3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0';
    const phaseSetting = [4, 3, 2, 1, 0];
    expect(calculateThrusterSignal(input, phaseSetting)).toBe(43210);
  });

  it('Max thruster signal of 54321 using all phases', () => {
    const input = '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0';
    expect(calculateMaxThrusterSignal(input)).toBe(54321);
  });

  it('Thruster signal of 54321 with phase given', () => {
    const input = '3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0';
    const phaseSetting = [0, 1, 2, 3, 4];
    expect(calculateThrusterSignal(input, phaseSetting)).toBe(54321);
  });

  it('Max thruster signal of 65210 using all phases', () => {
    const input = '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0';
    expect(calculateMaxThrusterSignal(input)).toBe(65210);
  });

  it('Thruster signal of 65210 with phase given', () => {
    const input = '3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0';
    const phaseSetting = [1, 0, 4, 3, 2];
    expect(calculateThrusterSignal(input, phaseSetting)).toBe(65210);
  });
});

describe('Day 7 Solutions', () => {
  it('Part 1 should be 19650', () => {
    expect(solvePart1()).toBe(19650);
  });

  it('Part 2 should be 35961106', () => {
    expect(solvePart2()).toBe(35961106);
  });
});
