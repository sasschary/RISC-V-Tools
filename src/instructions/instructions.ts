import { Instruction } from './abstract/Instruction';
import AddiInstr from './i/addi';
import AddiwInstr from './i/addiw';
import AndiInstr from './i/andi';
import CsrrcInstr from './i/CSRRC';
import CsrrciInstr from './i/CSRRCI';
import CsrrsInstr from './i/CSRRS';
import CsrrsiInstr from './i/CSRRSI';
import CsrrwInstr from './i/CSRRW';
import CsrrwiInstr from './i/CSRRWI';
import EbreakInstr from './i/ebreak';
import EcallInstr from './i/ecall';
import FenceInstr from './i/fence';
import FenceIInstr from './i/fencei';
import JalrInstr from './i/jalr';
import LbInstr from './i/lb';
import LbuInstr from './i/lbu';
import LdInstr from './i/ld';
import LhInstr from './i/lh';
import LhuInstr from './i/lhu';
import LwInstr from './i/lw';
import LwuInstr from './i/lwu';
import OriInstr from './i/ori';
import SlliInstr from './i/slli';
import SlliwInstr from './i/slliw';
import SltiInstr from './i/slti';
import SraiInstr from './i/srai';
import SraiwInstr from './i/sraiw';
import SrliInstr from './i/srli';
import SrliwInstr from './i/srliw';
import XoriInstr from './i/xori';
import AddInstr from './r/add';
import AddwInstr from './r/addw';
import AndInstr from './r/and';
import OrInstr from './r/or';
import SllInstr from './r/sll';
import SllwInstr from './r/sllw';
import SltInstr from './r/slt';
import SltuInstr from './r/sltu';
import SraInstr from './r/sra';
import SrawInstr from './r/sraw';
import SrlInstr from './r/srl';
import SrlwInstr from './r/srlw';
import SubInstr from './r/sub';
import SubwInstr from './r/subw';
import XorInstr from './r/xor';
import SbInstr from './s/sb';
import SdInstr from './s/sd';
import ShInstr from './s/sh';
import SwInstr from './s/sw';
import BeqInstr from './sb/beq';
import BgeInstr from './sb/bge';
import BgeuInstr from './sb/bgeu';
import BltInstr from './sb/blt';
import BltuInstr from './sb/bltu';
import BneInstr from './sb/bne';
import AuipcInstr from './u/auipc';
import LuiInstr from './u/lui';
import JalInstr from './uj/jal';
import SltiuInstr from './i/sltiu';

export const instructionsArray: Instruction[] = [
  new AddiInstr(),
  new AddiwInstr(),
  new AndiInstr(),
  new CsrrcInstr(),
  new CsrrciInstr(),
  new CsrrsInstr(),
  new CsrrsiInstr(),
  new CsrrwInstr(),
  new CsrrwiInstr(),
  new EbreakInstr(),
  new EcallInstr(),
  new FenceInstr(),
  new FenceIInstr(),
  new JalrInstr(),
  new LbInstr(),
  new LbuInstr(),
  new LdInstr(),
  new LhInstr(),
  new LhuInstr(),
  new LwInstr(),
  new LwuInstr(),
  new OriInstr(),
  new SlliInstr(),
  new SlliwInstr(),
  new SltiInstr(),
  new SltiuInstr(),
  new SraiInstr(),
  new SraiwInstr(),
  new SrliInstr(),
  new SrliwInstr(),
  new XoriInstr(),
  new AddInstr(),
  new AddwInstr(),
  new AndInstr(),
  new OrInstr(),
  new SllInstr(),
  new SllwInstr(),
  new SltInstr(),
  new SltuInstr(),
  new SraInstr(),
  new SrawInstr(),
  new SrlInstr(),
  new SrlwInstr(),
  new SubInstr(),
  new SubwInstr(),
  new XorInstr(),
  new SbInstr(),
  new SdInstr(),
  new ShInstr(),
  new SwInstr(),
  new BeqInstr(),
  new BgeInstr(),
  new BgeuInstr(),
  new BltInstr(),
  new BltuInstr(),
  new BneInstr(),
  new AuipcInstr(),
  new LuiInstr(),
  new JalInstr(),
];
