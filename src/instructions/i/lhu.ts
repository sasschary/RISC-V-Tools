import { IInstr } from '../abstract/IInstr';

export default class LhuInstr extends IInstr {
  readonly instruction = 'lhu';
  readonly opcode = 0b0000011;
  readonly funct3 = 0b101;
}
