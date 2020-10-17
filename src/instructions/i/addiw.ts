import {IInstr} from "../abstract/IInstr";

export default class AddiwInstr extends IInstr {
    readonly instruction = 'addiw';
    readonly opcode = 0b0011011;
    readonly funct3 = 0b000;
}