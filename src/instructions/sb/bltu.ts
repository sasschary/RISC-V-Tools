import { SBInstr } from '../abstract/SBInstr';

export default class BltuInstr extends SBInstr {
  readonly instruction = 'bltu';
  readonly opcode = 0b1100011;
  readonly funct3 = 0b110;
}
