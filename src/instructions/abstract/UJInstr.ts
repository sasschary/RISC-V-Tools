import { InstrArgs, Instruction } from './Instruction';

export interface UJInstrArgs extends InstrArgs {
  rd: number;
  imm: number;
}

export abstract class UJInstr extends Instruction {
  public formatCommand(instr: Uint32Array, radix: number = 16): string {
    const regs: UJInstrArgs = this.decodeArguments(instr);
    return `${this.instruction} ${regs.rd}, 0x${regs.imm.toString(radix)}`;
  }

  protected decodeArguments(instr: Uint32Array): UJInstrArgs {
    const rd: number = parseInt(instr.subarray(20, 25).join(''), 2);
    const imm20: number[] = Array.from(instr.subarray(0, 1));
    const imm19: number[] = Array.from(instr.subarray(12, 20));
    const imm11: number[] = Array.from(instr.subarray(11, 12));
    const imm10: number[] = Array.from(instr.subarray(1, 11));
    const imm0: number[] = [0];
    const imm: number = parseInt(
      imm20.concat(imm19).concat(imm11).concat(imm10).concat(imm0).join(''),
      2
    );
    return { rd, imm };
  }
}
