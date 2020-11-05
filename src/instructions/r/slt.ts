import { RInstr } from '../abstract/RInstr';

export default class SltInstr extends RInstr {
  readonly instruction = 'slt';
  readonly opcode = 0b0110011;
  readonly funct3 = 0b010;
  readonly funct7 = 0b0000000;
}
