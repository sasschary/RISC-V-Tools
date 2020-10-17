import {UJInstr} from "../abstract/UJInstr";

export default class JalInstr extends UJInstr {
    readonly instruction = 'jal';
    readonly opcode = 0b1101111;
}