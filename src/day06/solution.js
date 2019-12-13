import { calculateTotalOrbits } from './part1';
import { calculateOrbitalTransfers } from './part2';
import readInput from '../lib/readInput';

const solvePart1 = () => (
  calculateTotalOrbits(getInput())
);

const solvePart2 = () => (
  calculateOrbitalTransfers(getInput())
);

const getInput = () => readInput(`${__dirname}/input.txt`);

export { solvePart1, solvePart2 };
