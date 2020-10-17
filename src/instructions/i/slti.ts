import {IInstr} from "../abstract/IInstr";

export default class SltiInstr extends IInstr {
    readonly instruction = 'slti';
    readonly opcode = 0b0010011;
    readonly funct3 = 0b010;
}