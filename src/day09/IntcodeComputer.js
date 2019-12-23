export default class IntcodeComputer {
  constructor(program, phase = null) {
    this.memory = program;
    this.pointer = 0;
    this.outputs = [];
    this.input = 1;
    this.phase = phase;
    this.relativeBase = 0;
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
      case 9:
        this.adjustRelBaseOp();
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
    const operands = this.getOperands(2);
    this.memory[instruction[3]] = operands[0] + operands[1];
    this.pointer += 4;
  }

  multOp() {
    const instruction = this.memory.slice(this.pointer, this.pointer + 4);
    const operands = this.getOperands(2);
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
    const out = this.getOperands(1)[0];
    this.outputs.push(out);
    this.pointer += 2;
  }

  jumpIfTrueOp() {
    const operands = this.getOperands(2);
    this.pointer = (operands[0] !== 0)
      ? operands[1]
      : this.pointer + 3;
  }

  jumpIfFalseOp() {
    const operands = this.getOperands(2);
    this.pointer = (operands[0] === 0)
      ? operands[1]
      : this.pointer + 3;
  }

  lessThanOp() {
    const operands = this.getOperands(2);
    const pos = this.memory[this.pointer + 3];
    this.memory[pos] = (operands[0] < operands[1]) ? 1 : 0;
    this.pointer += 4;
  }

  equalsOp() {
    const operands = this.getOperands(2);
    const pos = this.memory[this.pointer + 3];
    this.memory[pos] = operands[0] === operands[1] ? 1 : 0;
    this.pointer += 4;
  }

  adjustRelBaseOp() {
    const operands = this.getOperands(1)[0];
    const adjustValue = operands;
    this.relativeBase += adjustValue;
    this.pointer += 2;
  }

  haltOp() {
    this.halted = true;
  }

  getOperands(size) {
    const operands = [];
    const modes = this.memory[this.pointer].toString().split('').reverse();

    for (let i = 0; i < size; i += 1) {
      const mode = Number(modes[i + 2]);
      const pos = this.pointer + i + 1;
      if (mode === 1) { // immediate mode
        operands[i] = this.memory[pos];
      } else if (mode === 2) { // relative mode
        operands[i] = this.memory[this.memory[pos] + this.relativeBase];
      } else { // position mode
        operands[i] = this.memory[this.memory[pos]];
      }
    }

    return operands.map((operand) => (
      operand === undefined ? 0 : operand
    ));
  }
}
