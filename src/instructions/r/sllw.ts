import { RInstr } from '../abstract/RInstr';

export default class SllwInstr extends RInstr {
  readonly instruction = 'sllw';
  readonly opcode = 0b0111011;
  readonly funct3 = 0b001;
  readonly funct7 = 0b0000000;
}
