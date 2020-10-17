import {IInstr} from "../abstract/IInstr";

export default class LwuInstr extends IInstr {
    readonly instruction = 'lwu';
    readonly opcode = 0b0000011;
    readonly funct3 = 0b110;
}