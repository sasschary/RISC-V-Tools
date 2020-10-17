import {IInstr} from "../abstract/IInstr";

export default class AddiInstr extends IInstr {
    readonly instruction = 'addi';
    readonly opcode = 0b0010011;
    readonly funct3 = 0b000;
}