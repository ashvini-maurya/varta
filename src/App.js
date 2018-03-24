import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Option from './component/option';
import Sentence from './component/sentence';
import Answer from './component/answer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="heading">
          <h2>Pick the words in order</h2>
        </div>

        <Sentence />
        <Answer />
        <Option />
      </div>
    );
  }
}

export default App;
