const part1 = require('./part1');

describe('Day 4 Part 1', () => {
  it('111111 is a valid password', () => {
    expect(part1.isValid(111111)).toBe(true);
  });

  it('223450 is an invalid password', () => {
    expect(part1.isValid(223450)).toBe(false);
  });

  it('123789 is a valid password', () => {
    expect(part1.isValid(123789)).toBe(false);
  });

  it('111111 never decreases', () => {
    expect(part1.decreases(111111)).toBe(false);
  });

  it('223450 decreases', () => {
    expect(part1.decreases(223450)).toBe(true);
  });

  it('111111 contains a double', () => {
    expect(part1.hasDouble(111111)).toBe(true);
  });

  it('123789 contains a double', () => {
    expect(part1.hasDouble(123789)).toBe(false);
  });
});
