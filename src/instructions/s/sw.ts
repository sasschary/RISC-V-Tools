import { SInstr } from '../abstract/SInstr';

export default class SwInstr extends SInstr {
  readonly instruction = 'sw';
  readonly opcode = 0b0100011;
  readonly funct3 = 0b010;
}
