import { onesDigitsTimesTwosDigits } from './part1';
import { decodeImage } from './part2';
import readInput from '../lib/readInput';

const solvePart1 = () => (
  onesDigitsTimesTwosDigits(getInput(), 25, 6)
);

const solvePart2 = () => (
  decodeImage(getInput(), 25, 6)
);

const getInput = () => readInput(`${__dirname}/input.txt`);

export { solvePart1, solvePart2 }
