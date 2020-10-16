
interface Instruction {
    name: string,
    type: 'R' | 'I' | 'S' | 'SB' | 'U' | 'UJ' | 'Error'
}

export default class RiscVDisassembler {
    /**
     * Disassemble an instruction
     * @param instr - The hex instruction to disassemble
     */
    static disassembleInstruction(instr: string): string {
        if (instr.length !== 8) return "Please ensure that the instruction is 32 bits!";

        // Read the instruction into a Uint32Array so we can easily interact with individual bits
        const instruction: Uint32Array = new Uint32Array(32);
        // TODO: Find better solution than just ts-ignore'ing the type error
        // @ts-ignore
        instruction.set(Uint32Array.from((parseInt(instr, 16).toString(2)).padStart(32, '0')));

        // Determine the instruction name and type
        const {name, type} = this.getInstr(
            instruction.subarray(25, 32).join(''),     // opcode
            instruction.subarray(17, 20).join(''),     // funct3
            instruction.subarray(0, 7).join(''),       // funct7
            instruction.subarray(0, 12).join('')       // imm
        );

        let command = name;
        if (name === 'Error') return name;
        if (type === 'R') {
            const rd: string = 'x' + parseInt(instruction.subarray(20, 25).join(''), 2).toString(10);
            const rs1: string = 'x' + parseInt(instruction.subarray(12, 17).join(''), 2).toString(10);
            const rs2: string = 'x' + parseInt(instruction.subarray(7, 12).join(''), 2).toString(10);
            command = `${name} ${rd}, ${rs1}, ${rs2}`;
        } else if (type === 'I') {
            const rd: string = 'x' + parseInt(instruction.subarray(20, 25).join(''), 2).toString(10);
            const rs1: string = 'x' + parseInt(instruction.subarray(12, 17).join(''), 2).toString(10);
            const imm: string = parseInt(instruction.subarray(0, 12).join(''), 2).toString(10);
            command = `${name} ${rd}, ${rs1}, ${imm}`;
        } else if (type === 'S') {
            const rs1: string = 'x' + parseInt(instruction.subarray(12, 17).join(''), 2).toString(10);
            const rs2: string = 'x' + parseInt(instruction.subarray(7, 12).join(''), 2).toString(10);
            const immArr: number[] = Array.from(instruction.subarray(0, 7));
            const immArr2: number[] = Array.from(instruction.subarray(20, 25));
            const imm: string = parseInt(immArr.concat(immArr2).join(''), 2).toString(10);
            command = `${name} ${rs2}, ${imm}(${rs1})`;
        } else if (type === 'SB') {
            const rs1: string = 'x' + parseInt(instruction.subarray(12, 17).join(''), 2).toString(10);
            const rs2: string = 'x' + parseInt(instruction.subarray(7, 12).join(''), 2).toString(10);
            const imm12: number[] = Array.from(instruction.subarray(0, 1));
            const imm11: number[] = Array.from(instruction.subarray(24, 25));
            const imm10: number[] = Array.from(instruction.subarray(1, 7));
            const imm4: number[] = Array.from(instruction.subarray(20, 24));
            const imm0: number[] = [0];
            const imm: string = parseInt(imm12.concat(imm11).concat(imm10).concat(imm4).concat(imm0).join(''), 2).toString(16);
            command = `${name} ${rs1}, ${rs2}, 0x${imm}`;
        } else if (type === 'U') {
            const rd: string = 'x' + parseInt(instruction.subarray(20, 25).join(''), 2).toString(10);
            const imm31: number[] = Array.from(instruction.subarray(0, 20));
            const imm11: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            const imm: string = parseInt(imm31.concat(imm11).join(''), 2).toString(16);
            command = `${name} ${rd}, 0x${imm}`;
        } else if (type === 'UJ') {
            const rd: string = 'x' + parseInt(instruction.subarray(20, 25).join(''), 2).toString(10);
            const imm20: number[] = Array.from(instruction.subarray(0, 1));
            const imm19: number[] = Array.from(instruction.subarray(12, 20));
            const imm11: number[] = Array.from(instruction.subarray(11, 12));
            const imm10: number[] = Array.from(instruction.subarray(1, 11));
            const imm0: number[] = [0];
            const imm: string = parseInt(imm20.concat(imm19).concat(imm11).concat(imm10).concat(imm0).join(''), 2).toString(16);
            command = `${name} ${rd}, 0x${imm}`;
        }

        return command;
    }

    /**
     * Determine the instruction name and type, given an opcode, funct3, and funct7
     * @param opcode - the opcode to decode
     * @param funct3 - funct3 for the instruction
     * @param funct7 - funct7 for the instruction
     * @param imm - immediate data for the instruction
     * @private
     */
    private static getInstr(opcode: string, funct3: string, funct7: string, imm: string): Instruction {
        let name: string = "";
        let type: Instruction['type'] = 'R';

        // Basically now just a huge switch/case for each opcode...
        switch (opcode) {
            case '0000011':
                type = 'I';
                if (funct3 === '000') {
                    name = 'lb;'
                } else if (funct3 === '001') {
                    name = 'lh';
                } else if (funct3 === '010') {
                    name = 'lw';
                } else if (funct3 === '011') {
                    name = 'ld';
                } else if (funct3 === '100') {
                    name = 'lbu';
                } else if (funct3 === '101') {
                    name = 'lhu';
                } else if (funct3 === '110') {
                    name = 'lwu';
                } else {
                    name = 'Error';
                }
                break;

            case '0001111':
                type = 'I';
                if (funct3 === '000') {
                    name = 'fence';
                } else if (funct3 === '001') {
                    name = 'fence.i';
                } else {
                    name = 'Error';
                }
                break;

            case '0010011':
                type = 'I';
                if (funct3 === '000') {
                    name = 'addi';
                } else if (funct3 === '001' && funct7 === '0000000') {
                    name = 'slli';
                } else if (funct3 === '010') {
                    name = 'slti';
                } else if (funct3 === '011') {
                    name = 'sltiu';
                } else if (funct3 === '100') {
                    name = 'xori';
                } else if (funct3 === '101' && funct7 === '0000000') {
                    name = 'slri';
                } else if (funct3 === '101' && funct7 === '0100000') {
                    name = 'srai';
                } else if (funct3 === '110') {
                    name = 'ori';
                } else if (funct3 === '111') {
                    name = 'andi';
                } else {
                    name = 'Error';
                }
                break;

            case '0010111':
                type = 'U';
                name = 'auipc';
                break;

            case '0011011':
                type = 'I';
                if (funct3 === '000') {
                    name = 'addiw';
                } else if (funct3 === '001' && funct7 === '0000000') {
                    name = 'slliw';
                } else if (funct3 === '101' && funct7 === '0000000') {
                    name = 'srliw';
                } else if (funct3 === '101' && funct7 === '0100000') {
                    name = 'sraiw';
                } else {
                    name = 'Error';
                }
                break;

            case '0100011':
                type = 'S';
                if (funct3 === '000') {
                    name = 'sb';
                } else if (funct3 === '001') {
                    name = 'sh';
                } else if (funct3 === '010') {
                    name = 'sw';
                } else if (funct3 === '011') {
                    name = 'sd';
                } else {
                    name = 'Error';
                }
                break;

            case '0110011':
                type = 'R';
                if (funct3 === '000' && funct7 === '0000000') {
                    name = 'add';
                } else if (funct3 === '000' && funct7 === '0100000') {
                    name = 'sub';
                } else if (funct3 === '001' && funct7 === '0000000') {
                    name = 'sll';
                } else if (funct3 === '010' && funct7 === '0000000') {
                    name = 'slt';
                } else if (funct3 === '011' && funct7 === '0000000') {
                    name = 'sltu';
                } else if (funct3 === '100' && funct7 === '0000000') {
                    name = 'xor';
                } else if (funct3 === '101' && funct7 === '0000000') {
                    name = 'srl';
                } else if (funct3 === '101' && funct7 === '0100000') {
                    name = 'sra';
                } else if (funct3 === '110' && funct7 === '0000000') {
                    name = 'or';
                } else if (funct3 === '111' && funct7 === '0000000') {
                    name = 'and';
                } else {
                    name = 'Error';
                }
                break;

            case '0110111':
                type = 'U';
                name = 'lui';
                break;

            case '0111011':
                type = 'R';
                if (funct3 === '000' && funct7 === '0000000') {
                    name = 'addw';
                } else if (funct3 === '000' && funct7 === '0100000') {
                    name = 'subw';
                } else if (funct3 === '001' && funct7 === '0000000') {
                    name = 'sllw';
                } else if (funct3 === '101' && funct7 === '0000000') {
                    name = 'srlw';
                } else if (funct3 === '101' && funct7 === '0100000') {
                    name = 'sraw';
                } else {
                    name = 'Error';
                }
                break;

            case '1100011':
                type = 'SB';
                if (funct3 === '000') {
                    name = 'beq';
                } else if (funct3 === '001') {
                    name = 'bne';
                } else if (funct3 === '100') {
                    name = 'blt';
                } else if (funct3 === '101') {
                    name = 'bge';
                } else if (funct3 === '110') {
                    name = 'bltu';
                } else if (funct3 === '111') {
                    name = 'bgeu';
                } else {
                    name = 'Error';
                }
                break;

            case '1100111':
                type = 'I';
                if (funct3 === '000') {
                    name = 'jalr';
                } else {
                    name = 'Error';
                }
                break;

            case '1101111':
                type = 'UJ';
                name = 'jal';
                break;

            case '1110011':
                type = 'I';
                if (funct3 === '000' && imm === '000000000000') {
                    name = 'ecall';
                } else if (funct3 === '000' && imm === '000000000001') {
                    name = 'ebreak';
                } else if (funct3 === '001') {
                    name = 'CSRRW';
                } else if (funct3 === '010') {
                    name = 'CSRRS';
                } else if (funct3 === '011') {
                    name = 'CSRRC';
                } else if (funct3 === '101') {
                    name = 'CSRRWI';
                } else if (funct3 === '110') {
                    name = 'CSRRSI';
                } else if (funct3 === '111') {
                    name = 'CSRRCI';
                } else {
                    name = 'Error';
                }
                break;

            default:
                name = 'Error';
                type = 'Error';
        }

        return {name, type};
    }
}