import {IInstr} from "../abstract/IInstr";

export default class LbuInstr extends IInstr {
    readonly instruction = 'lbu';
    readonly opcode = 0b0000011;
    readonly funct3 = 0b100;
}