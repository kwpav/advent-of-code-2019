import IntcodeComputer from './IntcodeComputer';

const calculateThrusterSignalInFeedbackMode = (input, phases) => {
  const program = input.split(',').map((n) => parseInt(n, 10));
  const amplifiers = phases.map((phase) => new IntcodeComputer(program, phase));

  let amp = -1;

  let ampOutput = 0;

  while (!amplifiers[0].halted
        && !amplifiers[1].halted
        && !amplifiers[2].halted
        && !amplifiers[3].halted
        && !amplifiers[4].halted) {
    amp = (amp + 1) % 5;
    while (!amplifiers[amp].halted) {
      amplifiers[amp].input = ampOutput;
      const output = amplifiers[amp].runUntilOutput();
      if (output.length !== 0) {
        ampOutput = output[0];
        break;
      }
    }
  }
  return ampOutput;
};

export { calculateThrusterSignalInFeedbackMode };
