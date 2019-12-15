import IntcodeComputer from './IntcodeComputer';

const calculateMaxThrusterSignal = (input, phaseNumbers = [0, 1, 2, 3, 4], callback = calculateThrusterSignal) => {
  const phaseSettings = generateAllPhaseSettings(phaseNumbers);
  const thrustSignals = phaseSettings.map((setting) => callback(input, setting));
  return Math.max(...thrustSignals);
};

const generateAllPhaseSettings = (phases) => {
  const allPhases = [];

  for (let i = 0; i < phases.length; i += 1) {
    const rest = generateAllPhaseSettings(phases.slice(0, i).concat(phases.slice(i + 1)));
    if (!rest.length) {
      allPhases.push([phases[i]]);
    } else {
      for (let j = 0; j < rest.length; j += 1) {
        allPhases.push([phases[i]].concat(rest[j]));
      }
    }
  }

  return allPhases;
};

const calculateThrusterSignal = (input, phases) => {
  const program = input.split(',').map((n) => parseInt(n, 10));
  const amplifiers = phases.map((phase) => new IntcodeComputer(program, phase));
  let ampOutput = 0;

  for (let amp = 0; amp < phases.length; amp += 1) {
    amplifiers[amp].input = ampOutput;
    amplifiers[amp].run();
    [ampOutput] = amplifiers[amp].outputs.reverse();
  }

  return ampOutput;
};

export { calculateThrusterSignal, calculateMaxThrusterSignal };
