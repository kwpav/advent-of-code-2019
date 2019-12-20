import { onesDigitsTimesTwosDigits, createImage, findLayerWithFewest } from './part1';
import { decodeImage } from './part2';
import { solvePart1, solvePart2 } from './solution';

describe('Day 8 Part 1', () => {
  it('Should calculate 1s digits times 2s digits', () => {
    expect(onesDigitsTimesTwosDigits('123456789012', 3, 2)).toBe(1);
  });

  it('3 pixels wide, 2 pixels tall - 123456789012 turns into an image', () => {
    expect(createImage('123456789012', 3, 2)).toStrictEqual(
      [[1, 2, 3, 4, 5, 6], [7, 8, 9, 0, 1, 2]],
    );
  });

  it('Finds layer with fewest 0s', () => {
    expect(findLayerWithFewest([[1, 2, 3, 4, 5, 6], [7, 8, 9, 0, 1, 2]], 0))
      .toStrictEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('Day 8 Part 2', () => {
  it('The final image of 0222112222120000 is [[0, 1], [1, 0]]', () => {
    expect(decodeImage('0222112222120000', 2, 2)).toStrictEqual([[0, 1], [1, 0]]);
  });
});

describe('Day 8 Solutions', () => {
  it('Part 1 solution is ???', () => {
    expect(solvePart1()).toBe(1862);
  });

  it('Part 2 solution is a single image that outpus GCPHL', () => {
    expect(solvePart2()).toStrictEqual(
      [[0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
       [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
       [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
       [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
       [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0],
       [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0]],
    );
  });
});
