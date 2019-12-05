const part1 = require('./part1');

const solvePart1 = () => {
  return part1.findValidPasswords(part1.range(16830, 718098));
};

exports.solvePart1 = solvePart1;
