import {SBInstr} from "../abstract/SBInstr";

export default class BneInstr extends SBInstr {
    readonly instruction = 'bne';
    readonly opcode = 0b1100011;
    readonly funct3 = 0b001;
}