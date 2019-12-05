const part1 = require('./part1');
const solution = require('./solution');

describe('Day 4 Part 1', () => {
  it('should find valid passwords', () => {
    expect(part1.findValidPasswords('111111223450123789')).toStrictEqual(['111111']);
  });

  it('111111 is a valid password', () => {
    expect(part1.isValid('111111')).toBe(true);
  });

  it('223450 is an invalid password', () => {
    expect(part1.isValid('223450')).toBe(false);
  });

  it('123789 is an invalid password', () => {
    expect(part1.isValid('123789')).toBe(false);
  });

  it('122345 is a valid password', () => {
    expect(part1.isValid('122345')).toBe(true);
  });

  it('111111 never decreases', () => {
    expect(part1.decreases('111111')).toBe(false);
  });

  it('223450 decreases', () => {
    expect(part1.decreases('223450')).toBe(true);
  });

  it('111111 contains a double', () => {
    expect(part1.hasDouble('111111')).toBe(true);
  });

  it('122345 contains a double', () => {
    expect(part1.hasDouble('122345')).toBe(true);
  });

  it('123789 does not contains a double', () => {
    expect(part1.hasDouble('123789')).toBe(false);
  });

  it('returns a list of passwords', () => {
    expect(part1.getPasswords('111111223450123789')).toStrictEqual(['111111', '223450', '123789']);
  });

  it('should generate a range between two numbers', () => {
    expect(part1.range(1, 20)).toStrictEqual('1234567891011121314151617181920');
  });
});

describe('Day 4 Solutions', () => {
  it('Part 1 solution should be ???', () => {
    expect(solution.solvePart1()).toBe(0);
  });
});
