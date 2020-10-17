import {IInstr} from "../abstract/IInstr";

export default class EbreakInstr extends IInstr {
    readonly instruction = 'ebreak';
    readonly opcode = 0b1110011;
    readonly funct3 = 0b000;
    readonly topImm = 0b000000000001;

    public isCommand(instr: Uint32Array): boolean {
        let valid: boolean = super.isCommand(instr); // Check normal I-type fields
        // But then additionally check the top immediate bits
        valid = valid && parseInt(instr.subarray(0, 12).join(''), 2) === this.topImm;
        return valid;
    }
}