import { IInstr } from '../abstract/IInstr';

export default class CsrrsiInstr extends IInstr {
  readonly instruction = 'CSRRSI';
  readonly opcode = 0b1110011;
  readonly funct3 = 0b110;
}
