import { IInstr } from '../abstract/IInstr';

export default class CsrrwiInstr extends IInstr {
  readonly instruction = 'CSRRWI';
  readonly opcode = 0b1110011;
  readonly funct3 = 0b101;
}
