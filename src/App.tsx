import React from 'react';

import './App.css';
import './disassembler/disassembler';
import Disassembler from "./disassembler/Disassembler.component";

/************************* TYPES *************************/

interface AppProps {}

interface AppState {}


/*********************** COMPONENT ***********************/

export default class App extends React.Component<AppProps, AppState> {
  render() {
      return (
          <div className="App">
              <Disassembler />
          </div>
      );
  }
}
