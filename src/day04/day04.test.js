const part1 = require('./part1');
const part2 = require('./part2');
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
    expect(part1.range(1, 20 + 1)).toStrictEqual('1234567891011121314151617181920');
  });

  it('should generate a range between two larger numbers', () => {
    expect(part1.range(13830, 13835 + 1)).toBe('138301383113832138331383413835');
  });

  it('should generate a range between two larger numbers', () => {
    expect(part1.range(718090, 718098 + 1)).toBe('718090718091718092718093718094718095718096718097718098');
  });
});

describe('Day 4 Part 2', () => {
  it('112233 is a valid password', () => {
    expect(part2.isValid('112233')).toBe(true);
  });

  it('123444 is an invalid password', () => {
    expect(part2.isValid('123444')).toBe(false);
  });

  it('111122 is a valid password', () => {
    expect(part2.isValid('111122')).toBe(true);
  });
});

describe('Day 4 Solutions', () => {
  it('Part 1 solution should be 1686', () => {
    expect(solution.solvePart1()).toBe(1686);
  });

  it('Part 2 solution should be 1145', () => {
    expect(solution.solvePart2()).toBe(1145);
  });
});
