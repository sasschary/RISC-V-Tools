import { InstrArgs, Instruction } from './Instruction';

export interface UInstrArgs extends InstrArgs {
  rd: number;
  imm: number;
}

export abstract class UInstr extends Instruction {
  public formatCommand(instr: Uint32Array, radix: number = 16): string {
    const regs: UInstrArgs = this.decodeArguments(instr);
    return `${this.instruction} ${regs.rd}, 0x${regs.imm.toString(radix)}`;
  }

  protected decodeArguments(instr: Uint32Array): UInstrArgs {
    const rd: number = parseInt(instr.subarray(20, 25).join(''), 2);
    const imm31: number[] = Array.from(instr.subarray(0, 20));
    const imm11: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const imm: number = parseInt(imm31.concat(imm11).join(''), 2);
    return { rd, imm };
  }
}
