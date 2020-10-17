import {RInstr} from "../abstract/RInstr";

export default class SltuInstr extends RInstr {
    readonly instruction = 'sltu';
    readonly opcode = 0b0110011;
    readonly funct3 = 0b011;
    readonly funct7 = 0b0000000;
}