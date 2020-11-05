import { instructionsArray } from '../instructions/instructions';

export default class RiscVDisassembler {
  /**
   * Disassemble an instruction
   * @param instr - The hex instruction to disassemble
   */
  static disassembleInstruction(instr: string): string {
    if (instr.length !== 8)
      return 'Please ensure that the instruction is 32 bits!';

    // Read the instruction into a Uint32Array so we can easily interact with individual bits
    const instruction: Uint32Array = new Uint32Array(32);
    instruction.set(
      Uint32Array.from(
        parseInt(instr, 16).toString(2).padStart(32, '0') as Iterable<number>
      )
    );

    let command: string = 'Error';
    instructionsArray.every((instr) => {
      if (instr.isCommand(instruction)) {
        command = instr.formatCommand(instruction);
        return false;
      }
      return true;
    });
    return command;
  }
}
