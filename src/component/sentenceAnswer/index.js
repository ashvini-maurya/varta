import React from 'react';
import './sentenceAnswer.css';

const SentenceAnswer = (props) => {
  return (
    <div className="sentence-answer">
      <p>
        {props.sentence}
        {props.answer}
      </p>
    </div>
  );
};

export default SentenceAnswer;
