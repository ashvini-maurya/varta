import React from 'react';
import './sentence.css';

const Sentence = (props) => {
    return (<div className="sentence">
        <p>
            {props.text}
        </p>
    </div>);
};

export default Sentence;
