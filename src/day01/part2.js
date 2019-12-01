const part1 = require('./part1');

const calculateFuelSum = (mass) => {
  const calculate = (total, current) => (
    (current <= 0) ? total : calculate(total + current, part1.calculateFuelSum(current))
  );
  return calculate(0, part1.calculateFuelSum(mass));
};

exports.calculateFuelSum = calculateFuelSum;
