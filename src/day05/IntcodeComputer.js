export default class IntcodeComputer {
  constructor(program) {
    this.memory = program;
    this.pointer = 0;
    this.outputs = [];
    this.input = 1;
  }

  run() {
    while (this.memory[this.pointer] !== 99) {
      this.processInstruction();
    }
    return this.memory;
  }

  processInstruction() {
    const opcode = this.memory[this.pointer] % 100;
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
    this.memory[pos] = this.input;
    this.pointer += 2;
  }

  outputOp() {
    const instruction = this.memory.slice(this.pointer, this.pointer + 2);
    let out = this.memory[instruction[1]];
    if (instruction[0].toString().length > 1) { // check for modes
      const modestring = instruction[0].toString();
      out = modestring[0] === '1' ? instruction[1] : this.memory[instruction[1]];
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
}
