import { UInstr } from '../abstract/UInstr';

export default class LuiInstr extends UInstr {
  readonly instruction = 'lui';
  readonly opcode = 0b0110111;
}
