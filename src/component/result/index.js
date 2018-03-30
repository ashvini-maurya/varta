import React from 'react';
import './result.css';

const Result = (props) => {
  if (props.result) {
    return (
      <div className="result">
        <div className="correct-msg">
          Correct
        </div>
      </div>
    );
  } else {
    return (
      <div className="result">
        <div className="incorrect-msg">
          Incorrect
        </div>
      </div>
    );
  }
};

export default Result;
