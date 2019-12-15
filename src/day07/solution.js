import { calculateMaxThrusterSignal } from './part1';
import { calculateThrusterSignalInFeedbackMode } from './part2';
import readInput from '../lib/readInput';

const solvePart1 = () => calculateMaxThrusterSignal(getInput());

const solvePart2 = () => calculateMaxThrusterSignal(getInput(),
  [5, 6, 7, 8, 9],
  calculateThrusterSignalInFeedbackMode);

const getInput = () => readInput(`${__dirname}/input.txt`);

export { solvePart1, solvePart2 };
