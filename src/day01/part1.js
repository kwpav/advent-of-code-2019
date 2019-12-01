const sum = (a, b) => a + b;

const calculateFuelSums = (massList, callBack) => (
  massList
    .map(callBack)
    .reduce(sum, 0)
);

const calculateFuelSum = (mass) => Math.floor(mass / 3) - 2;

exports.calculateFuelSum = calculateFuelSum;
exports.calculateFuelSums = calculateFuelSums;
exports.sum = sum;
