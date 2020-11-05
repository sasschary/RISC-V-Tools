import { RInstr } from '../abstract/RInstr';

export default class AddInstr extends RInstr {
  readonly instruction = 'add';
  readonly opcode = 0b0110011;
  readonly funct3 = 0b000;
  readonly funct7 = 0b0000000;
}
