import { UInstr } from '../abstract/UInstr';

export default class AuipcInstr extends UInstr {
  readonly instruction = 'auipc';
  readonly opcode = 0b0010111;
}
