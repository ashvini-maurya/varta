import React, { Component } from 'react';
import './App.css';

import Option from './component/option';
import Sentence from './component/sentence';
import Answer from './component/answer';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      sentence: 'Winter is coming',
      answer: '',
      option: ["Winter", "is", "coming"]
    };

    // this.optionClick = this.optionClick.bind(this);
  }

  // optionClick(event){
  //   console.log("inside optionClick");
  // }

  render() {
    return (
      <div className="App">
        <div className="heading">
          <h2>Pick the words in order</h2>
        </div>

        <Sentence text={this.state.sentence} />
        <Answer answer={this.state.answer} />
        <Option option={this.state.option} optionClicked={(arg,index) => console.log(arg + index) }/>
      </div>
    );
  }
}

export default App;
