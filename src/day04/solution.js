const part1 = require('./part1');

const solvePart1 = () => {
  return part1.findValidPasswords(part1.range(168630, 718098 + 1)).length;
};

exports.solvePart1 = solvePart1;
