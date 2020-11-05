import { IInstr } from '../abstract/IInstr';

export default class XoriInstr extends IInstr {
  readonly instruction = 'xori';
  readonly opcode = 0b0010011;
  readonly funct3 = 0b100;
}
