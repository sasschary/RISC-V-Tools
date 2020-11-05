import { InstrArgs, Instruction } from './Instruction';

export interface RInstrArgs extends InstrArgs {
  rd: number;
  rs1: number;
  rs2: number;
}

export abstract class RInstr extends Instruction {
  abstract readonly funct3: number;
  abstract readonly funct7: number;

  public formatCommand(instr: Uint32Array, radix: number = 16): string {
    const regs: RInstrArgs = this.decodeArguments(instr);
    return `${this.instruction} x${regs.rd}, x${regs.rs1}, x${regs.rs2}`;
  }

  public isCommand(instr: Uint32Array): boolean {
    let valid: boolean = super.isCommand(instr); // Check opcode
    valid =
      valid && parseInt(instr.subarray(17, 20).join(''), 2) === this.funct3;
    valid = valid && parseInt(instr.subarray(0, 7).join(''), 2) === this.funct7;
    return valid;
  }

  protected decodeArguments(instr: Uint32Array): RInstrArgs {
    const rd: number = parseInt(instr.subarray(20, 25).join(''), 2);
    const rs1: number = parseInt(instr.subarray(12, 17).join(''), 2);
    const rs2: number = parseInt(instr.subarray(7, 12).join(''), 2);
    return { rd, rs1, rs2 };
  }
}
