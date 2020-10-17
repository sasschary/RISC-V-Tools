import {RInstr} from "../abstract/RInstr";

export default class SllInstr extends RInstr {
    readonly instruction = 'sll';
    readonly opcode = 0b0110011;
    readonly funct3 = 0b001;
    readonly funct7 = 0b0000000;
}