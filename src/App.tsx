import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import './App.css';
import './disassembler/disassembler';
import disassembler from "./disassembler/disassembler";

/************************* TYPES *************************/

interface AppProps {}

interface AppState {
    instructionHex: string;
    disassembledHex: string;
    instructionBin: string;
    disassembledBin: string;
}


/*********************** COMPONENT ***********************/

export default class App extends React.Component<AppProps, AppState> {
  render() {
      return (
          <div className="App">
              <Form>
                  <Form.Label>Assembled Instruction (Hex)</Form.Label>
                  <InputGroup>
                      <InputGroup.Prepend>
                          <InputGroup.Text>0x</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl onChange={(evt) => this.setState({instructionHex: evt.target.value})} />
                      <InputGroup.Append>
                          <Button onClick={this.handleDisassembleHex}>Disassemble!</Button>
                      </InputGroup.Append>
                  </InputGroup>
                  <Form.Text>{this.state.disassembledHex}</Form.Text>
              </Form>
              <Form>
                  <Form.Label>Assembled Instruction (Binary)</Form.Label>
                  <InputGroup>
                      <InputGroup.Prepend>
                          <InputGroup.Text>0b</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl onChange={(evt) => this.setState({instructionBin: evt.target.value})} />
                      <InputGroup.Append>
                          <Button onClick={this.handleDisassembleBin}>Disassemble!</Button>
                      </InputGroup.Append>
                  </InputGroup>
                  <Form.Text>{this.state.disassembledBin}</Form.Text>
              </Form>
          </div>
      );
  }

  constructor(props: {} | Readonly<{}>) {
      super(props);
      this.handleDisassembleHex = this.handleDisassembleHex.bind(this);
      this.handleDisassembleBin = this.handleDisassembleBin.bind(this);
      this.state = {
          disassembledHex: '',
          instructionHex: '',
          disassembledBin: '',
          instructionBin: ''
      }
  }

  handleDisassembleHex() {
      const disassembledHex = disassembler.disassembleInstruction(this.state.instructionHex, 16);
      this.setState({disassembledHex});
  }

  handleDisassembleBin() {
    const disassembledBin = disassembler.disassembleInstruction(this.state.instructionBin, 2);
    this.setState({disassembledBin});
  }
}
