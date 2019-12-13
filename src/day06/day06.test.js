import { calculateTotalOrbits, calculateOrbitSize, generateOrbits } from './part1';
import { calculateOrbitalTransfers, findShortestPath } from './part2';
import { solvePart1, solvePart2 } from './solution';

describe('Day 6 Part 1', () => {
  it('Example should have 42 total orbits', () => {
    expect(calculateTotalOrbits(`COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L`)).toBe(42);
  });

  it('Calculate 1 orbits', () => {
    expect(calculateOrbitSize('B', {
      COM: {
        children: ['B'],
        parent: null,
      },
      B: {
        children: ['C', 'G'],
        parent: 'COM',
      },
    })).toBe(1);
  });

  it('Generate orbits should be a graph', () => {
    expect(generateOrbits(['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L']))
      .toStrictEqual({
        COM: {
          children: ['B'],
          parent: null,
        },
        B: {
          children: ['C', 'G'],
          parent: 'COM',
        },
        C: {
          children: ['D'],
          parent: 'B',
        },
        D: {
          children: ['E', 'I'],
          parent: 'C',
        },
        E: {
          children: ['F', 'J'],
          parent: 'D',
        },
        G: {
          children: ['H'],
          parent: 'B',
        },
        I: {
          children: [],
          parent: 'D',
        },
        H: {
          children: [],
          parent: 'G',
        },
        J: {
          children: ['K'],
          parent: 'E',
        },
        K: {
          children: ['L'],
          parent: 'J',
        },
        L: {
          children: [],
          parent: 'K',
        },
        F: {
          children: [],
          parent: 'E',
        },
      });
  });
});

describe('Day 6 Part 1', () => {
  const inputMap = `COM)B
B)C
C)D
D)E
E)F
B)G
G)H
D)I
E)J
J)K
K)L
K)YOU
I)SAN`;

  it('Example should be 4 orbital transfers', () => {
    expect(calculateOrbitalTransfers(inputMap)).toBe(4);
  });

  it('Finds the shortest path between you and santa', () => {
    const orbits = generateOrbits(inputMap.split('\n').filter(Boolean));
    expect(findShortestPath(orbits.YOU.parent, orbits))
      .toStrictEqual(['I', 'D', 'E', 'J']);
  });
});

describe('Day 6 Solutions', () => {
  it('Part 1 solution is 25447', () => {
    expect(solvePart1()).toBe(254447);
  });

  it('Part 2 solution is 445', () => {
    expect(solvePart2()).toBe(445);
  });
});
