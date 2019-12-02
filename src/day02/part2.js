const part1 = require('./part1');

const calculateGravityAssist = (program) => {
  for (let noun = 0; noun <= 99; noun += 1) {
    for (let verb = 0; verb <= 99; verb += 1) {
      const programCopy = [...program];
      programCopy[1] = noun;
      programCopy[2] = verb;
      const solution = part1.runIntcodeProgram(programCopy);
      if (solution[0] === 19690720) {
        return solution;
      }
    }
  }
  return [];
};

exports.calculateGravityAssist = calculateGravityAssist;
