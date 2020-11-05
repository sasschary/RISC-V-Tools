import { IInstr } from '../abstract/IInstr';

export default class LdInstr extends IInstr {
  readonly instruction = 'ld';
  readonly opcode = 0b0000011;
  readonly funct3 = 0b011;
}
