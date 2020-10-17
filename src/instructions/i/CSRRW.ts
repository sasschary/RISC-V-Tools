import {IInstr} from "../abstract/IInstr";

export default class CsrrwInstr extends IInstr {
    readonly instruction = 'CSRRW';
    readonly opcode = 0b1110011;
    readonly funct3 = 0b001;
}