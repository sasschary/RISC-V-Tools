import {IInstr} from "../abstract/IInstr";

export default class OriInstr extends IInstr {
    readonly instruction = 'ori';
    readonly opcode = 0b0010011;
    readonly funct3 = 0b110;
}