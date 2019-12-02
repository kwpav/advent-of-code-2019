const runIntcodeProgram = (program) => {
  let memory = [...program];
  let pointer = 0;
  while (memory[pointer] !== 99) {
    const instruction = memory.slice(pointer, pointer + 4);
    memory = processInstruction(memory, instruction);
    pointer += 4;
  }
  return memory;
};

const processInstruction = (program, instruction) => {
  const memory = program;
  switch (instruction[0]) {
    case 1:
      memory[instruction[3]] = program[instruction[1]] + program[instruction[2]];
      break;
    case 2:
      memory[instruction[3]] = program[instruction[1]] * program[instruction[2]];
      break;
    default:
      return program;
  }
  return memory;
};

exports.runIntcodeProgram = runIntcodeProgram;
exports.processInstruction = processInstruction;
