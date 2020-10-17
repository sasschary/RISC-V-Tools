import {IInstr} from "../abstract/IInstr";

export default class AndiInstr extends IInstr {
    readonly instruction = 'andi';
    readonly opcode = 0b0010011;
    readonly funct3 = 0b111;
}