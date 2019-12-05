const findValidPasswords = (numberRange) => (
  getPasswords(numberRange).filter(isValid)
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
  !decreases(password) && hasDouble(password)
);

const decreases = (password) => {
  const spassword = password.toString();
  for (let i = 0; i < spassword.length - 1; i += 1) {
    if (spassword.charAt(i) > spassword.charAt(i + 1)) {
      return true;
    }
  }
  return false;
};

const hasDouble = (password) => {
  const spassword = password.toString();
  for (let i = 0; i < spassword.length - 1; i += 1) {
    if (spassword.charAt(i) === spassword.charAt(i + 1)) {
      return true;
    }
  }
  return false;
};

exports.findValidPasswords = findValidPasswords;
exports.isValid = isValid;
exports.getPasswords = getPasswords;
exports.decreases = decreases;
exports.hasDouble = hasDouble;
