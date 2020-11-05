import { SBInstr } from '../abstract/SBInstr';

export default class BgeuInstr extends SBInstr {
  readonly instruction = 'bgeu';
  readonly opcode = 0b1100011;
  readonly funct3 = 0b111;
}
