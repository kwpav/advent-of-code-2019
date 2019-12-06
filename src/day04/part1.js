const findValidPasswords = (numberRange) => (
  removeDuplicates(getPasswords(numberRange).filter(isValid))
);

const getPasswords = (numberRange) => {
  const numbers = numberRange;
  const passwords = [];
  for (let i = 0; i < numbers.length; i += 6) {
    const password = numbers.slice(i, i + 6);
    passwords.push(password);
  }
  return passwords;
};

const isValid = (password) => (
  !decreases(password) && hasDouble(password) && password.length === 6
);

const decreases = (password) => {
  const check = (pw, idx) => pw[idx] < pw[idx - 1];
  return checkPassword(password, check);
};

const hasDouble = (password) => {
  const check = (pw, idx) => pw[idx] === pw[idx - 1];
  return checkPassword(password, check);
};

const checkPassword = (password, check) => {
  for (let i = 1; i < password.length; i += 1) {
    if (check(password, i)) {
      return true;
    }
  }
  return false;
};

const range = (lower, upper) => (
  [...Array(upper - lower).keys()].map((i) => i + lower).join('')
);

const removeDuplicates = (arr) => [...new Set(arr)];

exports.findValidPasswords = findValidPasswords;
exports.isValid = isValid;
exports.getPasswords = getPasswords;
exports.decreases = decreases;
exports.hasDouble = hasDouble;
exports.range = range;
exports.removeDuplicates = removeDuplicates;
