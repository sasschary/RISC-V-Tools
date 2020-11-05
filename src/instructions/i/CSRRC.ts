import { IInstr } from '../abstract/IInstr';

export default class CsrrcInstr extends IInstr {
  readonly instruction = 'CSRRC';
  readonly opcode = 0b1110011;
  readonly funct3 = 0b011;
}
