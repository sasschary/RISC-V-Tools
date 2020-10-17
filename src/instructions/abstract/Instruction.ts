export interface InstrArgs {}

export abstract class Instruction {
    abstract readonly opcode: number;
    abstract readonly instruction: string;

    /**
     * Get the entire command, formatted properly
     * @param instr - The instruction to decode and format
     * @param radix - The radix to put immediate values in
     */
    public formatCommand(instr: Uint32Array, radix: number = 16): string {
        return this.instruction;
    }

    /**
     * Returns whether or not the specified instruction is an instance of this command
     * @param instr - The instruction to test against the current instruction
     */
    public isCommand(instr: Uint32Array): boolean {
        return parseInt(instr.subarray(25, 32).join(''), 2) === this.opcode;
    }

    /**
     * Decodes and returns the arguments used for the given command
     * @param instr - The instruction being decoded
     * @protected
     */
    protected abstract decodeArguments(instr: Uint32Array): InstrArgs;

}