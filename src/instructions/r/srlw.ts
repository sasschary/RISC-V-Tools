import {RInstr} from "../abstract/RInstr";

export default class SrlwInstr extends RInstr {
    readonly instruction = 'srlw';
    readonly opcode = 0b0111011;
    readonly funct3 = 0b101;
    readonly funct7 = 0b0000000;
}