import { RInstr } from '../abstract/RInstr';

export default class OrInstr extends RInstr {
  readonly instruction = 'or';
  readonly opcode = 0b0110011;
  readonly funct3 = 0b110;
  readonly funct7 = 0b0000000;
}
