const part1 = require('./part1');
const part2 = require('./part2');
const solution = require('./solution');

describe('Day 3 Part 1', () => {
  it.each([
    [`R8,U5,L5,D3
U7,R6,D4,L4`, 6],
    [`R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`, 159],
    [`R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`, 135]])(
    '%s = distance %s', (n, expected) => {
      expect(part1.calculateDistance(n)).toStrictEqual(expected);
    },
  );

  it('given direction [R, 75] and point (0, 0), return point (75, 0)', () => {
    expect(part1.getNextPoint(['R', 75], { x: 0, y: 0 })).toStrictEqual({ x: 75, y: 0 });
  });

  it('given directions R8,U5,L5,D3, return points', () => {
    expect(part1.getWirePath('R8,U5,L5,D3')).toStrictEqual([
      { x: 8, y: 0 },
      { x: 8, y: 5 },
      { x: 3, y: 5 },
      { x: 3, y: 2 }]);
  });

  it('given directions R8,U5,L5,D3, return points', () => {
    expect(part1.getWirePath('U7,R6,D4,L4')).toStrictEqual([
      { x: 0, y: 7 },
      { x: 6, y: 7 },
      { x: 6, y: 3 },
      { x: 2, y: 3 }]);
  });

  it('given directions R8,U5,L5,D3, return points', () => {
    expect(part1.parseDirections('R8,U5,L5,D3'))
      .toStrictEqual([
        ['R', 8],
        ['U', 5],
        ['L', 5],
        ['D', 3]]);
  });

  it('given two wire paths, return all instersections', () => {
    expect(part1.getIntersections([
      { x: 8, y: 0 },
      { x: 8, y: 5 },
      { x: 3, y: 5 },
      { x: 3, y: 2 }],
    [{ x: 0, y: 7 },
      { x: 6, y: 7 },
      { x: 6, y: 3 },
      { x: 2, y: 3 }])).toStrictEqual([
      { x: 6, y: 5 },
      { x: 3, y: 3 }]);
  });

  it('given two intersection line sections, return point of intersection', () => {
    expect(part1.getIntersection({ x: 3, y: 5 }, { x: 3, y: 2 },
      { x: 6, y: 3 }, { x: 2, y: 3 })).toStrictEqual({ x: 3, y: 3 });
  });

  it('given two intersection line sections, return point of intersection', () => {
    expect(part1.getIntersection({ x: 8, y: 5 }, { x: 3, y: 5 },
      { x: 6, y: 7 }, { x: 6, y: 3 })).toStrictEqual({ x: 6, y: 5 });
  });

  it('given an array of intersections, return the manhattan distance of the closest to center', () => {
    expect(part1.getClosestIntersection([{ x: 6, y: 5 }, { x: 3, y: 3 }])).toStrictEqual(6);
  });
});

describe('Day 3 Part 2', () => {
  it.each([
    [`R8,U5,L5,D3
U7,R6,D4,L4`, 30],
    [`R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83`, 610],
    [`R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7`, 410]])(
    '%s = distance %i', (n, expected) => {
      expect(part2.calculateShortestSteps(n)).toStrictEqual(expected);
    },
  );

  it('should calculate the manhattan distance between two points', () => {
    expect(part2.calculateManhattanDistance({ x: 3, y: 3 }, { x: 0, y: 0 })).toBe(6);
  });

  it('should calculate the manhattan distance between two points', () => {
    expect(part2.calculateManhattanDistance({ x: 6, y: 3 }, { x: 2, y: 3 })).toBe(4);
  });

  it('should calculate the number of steps until it hits an intersection', () => {
    expect(part2.pathStepsUntilIntersection([
      { x: 8, y: 0 },
      { x: 8, y: 5 },
      { x: 3, y: 5 },
      { x: 3, y: 2 }], { x: 3, y: 3 })).toBe(20);
  });

  it('should calculate the number of steps until it hits an intersection', () => {
    expect(part2.pathStepsUntilIntersection([
      { x: 0, y: 7 },
      { x: 6, y: 7 },
      { x: 6, y: 3 },
      { x: 2, y: 3 }], { x: 3, y: 3 })).toBe(20);
  });

  it('should return true if the point is on a line', () => {
    expect(part2.isPointInLine({ x: 3, y: 5 }, { x: 3, y: 2 }, { x: 3, y: 3 })).toBe(true);
  });

  it('should return true if the point is on a line', () => {
    expect(part2.isPointInLine({ x: 8, y: 5 }, { x: 3, y: 5 }, { x: 6, y: 5 })).toBe(true);
  });

  it('should return false if the point is not on a line', () => {
    expect(part2.isPointInLine({ x: 0, y: 7 }, { x: 6, y: 7 }, { x: 3, y: 3 })).toBe(false);
  });
});

describe('Day 3 Solutions', () => {
  test('Part 1 solution is 5319', () => {
    expect(solution.solvePart1()).toStrictEqual(5319);
  });

  test('part 2 solution is 122514', () => {
    expect(solution.solvePart2()).toStrictEqual(122514);
  });
});
