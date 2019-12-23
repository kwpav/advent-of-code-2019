import IntcodeComputer from './IntcodeComputer';
import readInput from '../lib/readInput';

const solvePart1 = () => {
  const computer = new IntcodeComputer(getInput());
  computer.run();
  return computer.outputs;
};

const getInput = () => readInput(`${__dirname}/input.txt`).split(',').map((n) => parseInt(n, 10));

export { solvePart1 };
