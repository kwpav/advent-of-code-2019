const part1 = require('./part1');
const part2 = require('./part2');

const solvePart1 = () => {
  return part1.findValidPasswords(part1.range(168630, 718098 + 1)).length;
};

const solvePart2 = () => {
  return part2.findValidPasswords(part1.range(168630, 718098 + 1)).length;
};

exports.solvePart1 = solvePart1;
exports.solvePart2 = solvePart2;
