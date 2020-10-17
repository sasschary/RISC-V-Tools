import {RInstr} from "../abstract/RInstr";

export default class SraInstr extends RInstr {
    readonly instruction = 'sra';
    readonly opcode = 0b0110011;
    readonly funct3 = 0b101;
    readonly funct7 = 0b0100000;
}