import { IInstr } from '../abstract/IInstr';

export default class LhInstr extends IInstr {
  readonly instruction = 'lh';
  readonly opcode = 0b0000011;
  readonly funct3 = 0b001;
}
