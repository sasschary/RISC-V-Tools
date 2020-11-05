import { IInstr } from '../abstract/IInstr';

export default class LwInstr extends IInstr {
  readonly instruction = 'lw';
  readonly opcode = 0b0000011;
  readonly funct3 = 0b010;
}
