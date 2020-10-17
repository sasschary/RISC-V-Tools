import {IInstr} from "../abstract/IInstr";

export default class CsrrciInstr extends IInstr {
    readonly instruction = 'CSRRCI';
    readonly opcode = 0b1110011;
    readonly funct3 = 0b111;
}