const part1 = require('./part1');
const part2 = require('./part2');
const readInput = require('../lib/readInput');

const parseInput = () => (
  readInput(`${__dirname}/input.txt`)
    .split('\n')
    .map(parseFloat)
    .filter(Boolean)
);

const solvePart1 = () => (
  part1.calculateFuelSums(parseInput(), part1.calculateFuelSum)
);

const solvePart2 = () => (
  part1.calculateFuelSums(parseInput(), part2.calculateFuelSum)
);

exports.solvePart1 = solvePart1;
exports.solvePart2 = solvePart2;
