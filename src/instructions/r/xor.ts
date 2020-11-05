import { RInstr } from '../abstract/RInstr';

export default class XorInstr extends RInstr {
  readonly instruction = 'xor';
  readonly opcode = 0b0110011;
  readonly funct3 = 0b100;
  readonly funct7 = 0b0000000;
}
