import React, { Component } from 'react';
import './App.css';

import Option from './component/option';
import Result from './component/result';
import SentenceAnswer from './component/sentenceAnswer';

// randomize
function randomize(listSentence){
  let randomSentenceList = listSentence
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1])
  return randomSentenceList;
}

var sentences = randomize(['The Final Empire ', 'The Old Man and the Sea ', 'Turtles All the Way Down ', 'When Breath Becomes Air ', 'The Last Lecture ', 'Train to Pakistan ', 'Sapiens: A Brief History of Humankind ']);
var splitSentence = sentences[0].split(" ").filter(item => item.trim() !== '');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sentence: sentences[0],
      answer: '',
      option: randomize(splitSentence),
      result: true,
    };
  }

  optionClick(event) {
    this.setState({ 
      answer: this.state.answer.concat(event + " "), 
      option: this.state.option.filter(item => item !== event) });
  }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h2>Pick the words in order</h2>
        </div>
        <SentenceAnswer sentence={this.state.sentence} />
        <SentenceAnswer answer={this.state.answer} />
        <Option option={this.state.option} optionClicked={this.optionClick.bind(this)} />
        {this.state.option.length === 0 && <Result result={this.state.sentence === this.state.answer} />} 
      </div>
    )
  }
}

export default App;
