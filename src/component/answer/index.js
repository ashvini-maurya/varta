import React from 'react';

import './answer.css'

const Answer = (props) => {
    return (<div className="answer">
        <p>
            {props.answer}
        </p>
    </div>);
};

export default Answer