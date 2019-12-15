export default class IntcodeComputer {
  constructor(program, phase = null) {
    this.memory = program;
    this.pointer = 0;
    this.outputs = [];
    this.input = 1;
    this.phase = phase;
    this.halted = false;
  }

  run() {
    while (!this.halted) {
      const opcode = this.memory[this.pointer] % 100;
      this.processInstruction(opcode);
    }
    return this.memory;
  }

  runUntilOutput() {
    let opcode = this.memory[this.pointer] % 100;
    this.outputs = [];
    while (!this.halted) {
      this.processInstruction(opcode);
      if (this.halted || opcode === 4) {
        break;
      }
      opcode = this.memory[this.pointer] % 100;
    }
    return this.outputs;
  }

  processInstruction(opcode) {
    switch (opcode) {
      case 1:
        this.addOp();
        break;
      case 2:
        this.multOp();
        break;
      case 3:
        this.inputOp();
        break;
      case 4:
        this.outputOp();
        break;
      case 5:
        this.jumpIfTrueOp();
        break;
      case 6:
        this.jumpIfFalseOp();
        break;
      case 7:
        this.lessThanOp();
        break;
      case 8:
        this.equalsOp();
        break;
      case 99:
        this.haltOp();
        break;
      default:
        break;
    }
  }

  addOp() {
    const instruction = this.memory.slice(this.pointer, this.pointer + 4);
    const operands = this.getOperands();
    this.memory[instruction[3]] = operands[0] + operands[1];
    this.pointer += 4;
  }

  multOp() {
    const instruction = this.memory.slice(this.pointer, this.pointer + 4);
    const operands = this.getOperands();
    this.memory[instruction[3]] = operands[0] * operands[1];
    this.pointer += 4;
  }

  inputOp() {
    const pos = this.memory[this.pointer + 1];
    if (this.phase !== null) {
      this.memory[pos] = this.phase;
      this.phase = null; // this only gets set once
    } else {
      this.memory[pos] = this.input;
    }
    this.pointer += 2;
  }

  outputOp() {
    const instruction = this.memory.slice(this.pointer, this.pointer + 2);
    let out = this.memory[instruction[1]];
    if (instruction[0].toString().length > 1) { // check for modes
      const modes = this.memory[this.pointer].toString().split('').reverse();
      out = modes[2] === '1' ? instruction[1] : this.memory[instruction[1]];
    }
    this.outputs.push(out);
    this.pointer += 2;
  }

  jumpIfTrueOp() {
    const operands = this.getOperands();
    this.pointer = (operands[0] !== 0)
      ? operands[1]
      : this.pointer + 3;
  }

  jumpIfFalseOp() {
    const operands = this.getOperands();
    this.pointer = (operands[0] === 0)
      ? operands[1]
      : this.pointer + 3;
  }

  lessThanOp() {
    const operands = this.getOperands();
    const pos = this.memory[this.pointer + 3];
    this.memory[pos] = (operands[0] < operands[1]) ? 1 : 0;
    this.pointer += 4;
  }

  equalsOp() {
    const operands = this.getOperands();
    const pos = this.memory[this.pointer + 3];
    this.memory[pos] = operands[0] === operands[1] ? 1 : 0;
    this.pointer += 4;
  }

  getOperands() {
    const operands = [];
    const modes = this.memory[this.pointer].toString().split('').reverse();
    const nounMode = Number(modes[2]);
    const verbMode = Number(modes[3]);
    operands[0] = nounMode === 1
      ? this.memory[this.pointer + 1]
      : this.memory[this.memory[this.pointer + 1]];
    operands[1] = verbMode === 1
      ? this.memory[this.pointer + 2]
      : this.memory[this.memory[this.pointer + 2]];
    return operands;
  }

  haltOp() {
    this.halted = true;
  }
}
