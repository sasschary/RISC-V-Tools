import { SInstr } from '../abstract/SInstr';

export default class SdInstr extends SInstr {
  readonly instruction = 'sd';
  readonly opcode = 0b0100011;
  readonly funct3 = 0b011;
}
