const part1 = require('./part1');

const findValidPasswords = (numberRange) => (
  part1.removeDuplicates(part1.getPasswords(numberRange).filter(isValid))
);

const hasDouble = (password) => (
  password.match(/(?:^|(.)(?!\1))(\d)\2(?!\2)/) !== null
);

const isValid = (password) => (
  !part1.decreases(password) && hasDouble(password) && password.length === 6
);

exports.findValidPasswords = findValidPasswords;
exports.hasOnlyDouble = hasDouble;
exports.isValid = isValid;
