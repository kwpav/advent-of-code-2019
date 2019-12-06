const part1 = require('./part1');

const hasOnlyDouble = (password) => (
  password.match(/(\d)\1\1/g) === null
);

exports.hasOnlyDouble = hasOnlyDouble;
