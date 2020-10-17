import {RInstr} from "../abstract/RInstr";

export default class SubInstr extends RInstr {
    readonly instruction = 'sub';
    readonly opcode = 0b0110011;
    readonly funct3 = 0b000;
    readonly funct7 = 0b0100000;
}