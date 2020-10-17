import {IInstr} from "../abstract/IInstr";

export default class SlliwInstr extends IInstr {
    readonly instruction = 'slliw';
    readonly opcode = 0b0011011;
    readonly funct3 = 0b001;
    readonly topImm = 0b0000000;

    public isCommand(instr: Uint32Array): boolean {
        let valid: boolean = super.isCommand(instr); // Check normal I-type fields
        // But then additionally check the top immediate bits
        valid = valid && parseInt(instr.subarray(0, 7).join(''), 2) === this.topImm;
        return valid;
    }
}