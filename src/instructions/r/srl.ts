import {RInstr} from "../abstract/RInstr";

export default class SrlInstr extends RInstr {
    readonly instruction = 'srl';
    readonly opcode = 0b0110011;
    readonly funct3 = 0b101;
    readonly funct7 = 0b0000000;
}