import { SBInstr } from '../abstract/SBInstr';

export default class BeqInstr extends SBInstr {
  readonly instruction = 'beq';
  readonly opcode = 0b1100011;
  readonly funct3 = 0b000;
}
