import {SBInstr} from "../abstract/SBInstr";

export default class BgeInstr extends SBInstr {
    readonly instruction = 'bge';
    readonly opcode = 0b1100011;
    readonly funct3 = 0b101;
}