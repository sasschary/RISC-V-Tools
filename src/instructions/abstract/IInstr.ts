import {InstrArgs, Instruction} from "./Instruction";

export interface IInstrArgs extends InstrArgs {
    rd: number;
    rs1: number;
    imm: number;
}

export abstract class IInstr extends Instruction {
    abstract readonly funct3: number;

    public formatCommand(instr: Uint32Array, radix: number = 16): string {
        const args: IInstrArgs = this.decodeArguments(instr);
        if (this.instruction[0] === 'l') { // Load instructions get displayed with the whole parenthesis formatting thing
            return `${this.instruction} x${args.rd}, 0x${args.imm.toString(radix)}(x${args.rs1})`
        }
        return `${this.instruction} x${args.rd}, x${args.rs1}, 0x${args.imm.toString(radix)}`;
    }

    public isCommand(instr: Uint32Array): boolean {
        let valid: boolean = super.isCommand(instr); // Check opcode
        valid = valid && parseInt(instr.subarray(17, 20).join(''), 2) === this.funct3;
        return valid;
    }

    protected decodeArguments(instr: Uint32Array): IInstrArgs {
        const rd: number = parseInt(instr.subarray(20, 25).join(''), 2);
        const rs1: number = parseInt(instr.subarray(12, 17).join(''), 2);
        const imm: number = parseInt(instr.subarray(0, 12).join(''), 2);
        return {rd, rs1, imm};
    }
}