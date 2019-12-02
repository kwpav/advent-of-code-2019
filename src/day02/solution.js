const part1 = require('./part1');
const part2 = require('./part2');
const readInput = require('../lib/readInput');

const solvePart1 = () => {
  const input = parseInput();
  input[1] = 12;
  input[2] = 2;
  return part1.runIntcodeProgram(input).toString();
};

const solvePart2 = () => {
  const input = parseInput();
  const solution = part2.calculateGravityAssist(input);
  return 100 * solution[1] + solution[2];
};

const parseInput = () => readInput(`${__dirname}/input.txt`).split(',').map(Number);

exports.solvePart1 = solvePart1;
exports.solvePart2 = solvePart2;
