const part1 = require('./part1');
const part2 = require('./part2');
const readInput = require('../lib/readInput');

const solvePart1 = () => part1.calculateDistance(getInput());

const solvePart2 = () => part2.calculateShortestSteps(getInput());

const getInput = () => readInput(`${__dirname}/input.txt`);

exports.solvePart1 = solvePart1;
exports.solvePart2 = solvePart2;
