import { IInstr } from '../abstract/IInstr';

export default class LbInstr extends IInstr {
  readonly instruction = 'lb';
  readonly opcode = 0b0000011;
  readonly funct3 = 0b000;
}
