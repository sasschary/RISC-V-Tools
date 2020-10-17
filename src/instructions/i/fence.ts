import {IInstr} from "../abstract/IInstr";

export default class FenceInstr extends IInstr {
    readonly instruction = 'fence';
    readonly opcode = 0b0001111;
    readonly funct3 = 0b000;
}