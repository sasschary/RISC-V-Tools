import { SInstr } from '../abstract/SInstr';

export default class ShInstr extends SInstr {
  readonly instruction = 'sh';
  readonly opcode = 0b0100011;
  readonly funct3 = 0b001;
}
