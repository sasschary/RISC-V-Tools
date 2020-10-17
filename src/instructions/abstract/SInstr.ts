import {InstrArgs, Instruction} from "./Instruction";

export interface SInstrArgs extends InstrArgs {
    rd: number;
    rs1: number;
    rs2: number;
    imm: number;
}

export abstract class SInstr extends Instruction {
    abstract readonly funct3: number;

    public formatCommand(instr: Uint32Array, radix: number = 16): string {
        const regs: SInstrArgs = this.decodeArguments(instr);
        return `${this.instruction} ${regs.rs2}, 0x${regs.imm.toString(radix)}(${regs.rs1})`;
    }

    public isCommand(instr: Uint32Array): boolean {
        let valid: boolean = super.isCommand(instr); // Check opcode
        valid = valid && parseInt(instr.subarray(17, 20).join(''), 2) === this.funct3;
        return valid;
    }

    protected decodeArguments(instr: Uint32Array): SInstrArgs {
        const rd: number = parseInt(instr.subarray(20, 25).join(''), 2);
        const rs1: number = parseInt(instr.subarray(12, 17).join(''), 2);
        const rs2: number = parseInt(instr.subarray(7, 12).join(''), 2);
        const immArr: number[] = Array.from(instr.subarray(0, 7));
        const immArr2: number[] = Array.from(instr.subarray(20, 25));
        const imm: number = parseInt(immArr.concat(immArr2).join(''), 2);
        return {rd, rs1, rs2, imm};
    }
}