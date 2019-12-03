const isValid = (password) => {
  return !decreases(password) && hasDouble(password);
};

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

exports.isValid = isValid;
exports.decreases = decreases;
exports.hasDouble = hasDouble;
