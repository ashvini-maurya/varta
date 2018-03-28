import React, { Component } from 'react';
import './App.css';

import Option from './component/option';
import Sentence from './component/sentence';
import Answer from './component/answer';
import Correct from './component/correct';
import Incorrect from './component/incorrect';

// randomizing option
const sentenceShuffleArr = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sentence: 'Winter is coming ',
      answer: '',
      option: sentenceShuffleArr(["Winter", "is", "coming"]),
      correct: true,
    };
  }

  optionClick(event) {
    this.setState({ 
      answer: this.state.answer.concat(event + " "), 
      option: this.state.option.filter(item => item !== event) }, () => {
      if ((this.state.option).length === 0 && this.state.sentence === this.state.answer) {
        this.setState({
          correct: true,
        })
      } else {
        this.setState({
          correct: false,
        })
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h2>Pick the words in order</h2>
        </div>
        <Sentence text={this.state.sentence} />
        <Answer answer={this.state.answer} />
        <Option option={this.state.option} optionClicked={this.optionClick.bind(this)} />
        {this.state.option.length === 0 && this.state.correct && <Correct />}
        {this.state.option.length === 0 && !this.state.correct && <Incorrect />}   
      </div>
    )
  }
}

export default App;
