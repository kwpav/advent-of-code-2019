const sum = (a, b) => a + b;

const calculateFuelSum = (mass) => Math.floor(mass / 3) - 2;

const calculateFuelSums = (masses, callback) => (
  masses
    .map(callback)
    .reduce(sum, 0)
);

exports.calculateFuelSum = calculateFuelSum;
exports.calculateFuelSums = calculateFuelSums;
exports.sum = sum;
