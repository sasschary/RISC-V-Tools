import { SInstr } from '../abstract/SInstr';

export default class SbInstr extends SInstr {
  readonly instruction = 'sb';
  readonly opcode = 0b0100011;
  readonly funct3 = 0b000;
}
