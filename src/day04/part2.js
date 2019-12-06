const part1 = require('./part1');

const findValidPasswords = (numberRange) => (
  part1.removeDuplicates(part1.getPasswords(numberRange).filter(isValid))
);

const hasOnlyDouble = (password) => {
  const doubles = password.match(/(\d)\1/g);
  return doubles !== null && doubles.length === 3;
};

const isValid = (password) => (
  !part1.decreases(password) && hasOnlyDouble(password) && password.length === 6
);

exports.findValidPasswords = findValidPasswords;
exports.hasOnlyDouble = hasOnlyDouble;
exports.isValid = isValid;
