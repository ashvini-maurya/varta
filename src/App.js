import React, { Component } from 'react';
import './App.css';

import Option from './component/option';
import Sentence from './component/sentence';
import Answer from './component/answer';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      sentence: 'Winter is coming ',
      answer: '',
      option: ["Winter", "is", "coming"]
    };

    // this.optionClick = this.optionClick.bind(this);
  }

  optionClick(event){
    this.setState({answer: this.state.answer.concat(event + " "), option: this.state.option.filter(item => item !== event) }, () => {
      if((this.state.option).length === 0 && this.state.sentence === this.state.answer) {
        console.log("correct");
      } else {
        console.log("incorrect");
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
        <Option option={this.state.option} optionClicked={this.optionClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
