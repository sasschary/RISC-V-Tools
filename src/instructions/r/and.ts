import {RInstr} from "../abstract/RInstr";

export default class AndInstr extends RInstr {
    readonly instruction = 'and';
    readonly opcode = 0b0110011;
    readonly funct3 = 0b111;
    readonly funct7 = 0b0000000;
}