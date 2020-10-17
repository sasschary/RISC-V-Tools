import {IInstr} from "../abstract/IInstr";

export default class JalrInstr extends IInstr {
    readonly instruction = 'jalr';
    readonly opcode = 0b1100111;
    readonly funct3 = 0b000;
}