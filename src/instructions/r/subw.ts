import { RInstr } from '../abstract/RInstr';

export default class SubwInstr extends RInstr {
  readonly instruction = 'subw';
  readonly opcode = 0b0111011;
  readonly funct3 = 0b000;
  readonly funct7 = 0b0100000;
}
