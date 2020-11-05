import { IInstr } from '../abstract/IInstr';

export default class FenceIInstr extends IInstr {
  readonly instruction = 'fence.i';
  readonly opcode = 0b0001111;
  readonly funct3 = 0b001;
}
