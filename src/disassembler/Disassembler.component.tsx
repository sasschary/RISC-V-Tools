import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import '../App.css';
import '../disassembler/disassembler';
import disassembler from "../disassembler/disassembler";

/************************* TYPES *************************/

interface DisassemblerProps {}

interface DisassemblerState {
    instruction: string;
    disassembled: string;
}


/*********************** COMPONENT ***********************/

export default class Disassembler extends React.Component<DisassemblerProps, DisassemblerState> {
    render() {
        return (
            <div className="tool-container">
                <Form onSubmit={this.handleDisassemble}>
                    <Form.Label>Assembled Instruction</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>0x</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl onChange={(evt) => this.setState({instruction: evt.target.value})} />
                        <InputGroup.Append>
                            <Button onClick={this.handleDisassemble}>Disassemble!</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <Form.Text>{this.state.disassembled}</Form.Text>
                </Form>
            </div>
        );
    }

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.handleDisassemble = this.handleDisassemble.bind(this);
        this.state = {
            disassembled: '',
            instruction: ''
        }
    }

    handleDisassemble(evt: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLElement>) {
        evt.preventDefault();
        const disassembled = disassembler.disassembleInstruction(this.state.instruction);
        this.setState({disassembled});
    }
}
