import { SBInstr } from '../abstract/SBInstr';

export default class BltInstr extends SBInstr {
  readonly instruction = 'blt';
  readonly opcode = 0b1100011;
  readonly funct3 = 0b100;
}
