import {RInstr} from "../abstract/RInstr";

export default class AddwInstr extends RInstr {
    readonly instruction = 'addw';
    readonly opcode = 0b0111011;
    readonly funct3 = 0b000;
    readonly funct7 = 0b0000000;
}