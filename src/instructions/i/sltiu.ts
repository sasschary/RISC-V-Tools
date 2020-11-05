import { IInstr } from '../abstract/IInstr';

export default class SltiuInstr extends IInstr {
  readonly instruction = 'sltiu';
  readonly opcode = 0b0010011;
  readonly funct3 = 0b011;
}
