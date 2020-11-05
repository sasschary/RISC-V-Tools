import { RInstr } from '../abstract/RInstr';

export default class SrawInstr extends RInstr {
  readonly instruction = 'sraw';
  readonly opcode = 0b0111011;
  readonly funct3 = 0b101;
  readonly funct7 = 0b0100000;
}
