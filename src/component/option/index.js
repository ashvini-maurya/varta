import React from 'react';

import './option.css'

function OptionList(props) {
    return (
        <div className="option">
            {props.option.map((w, i) => <button onClick={() => props.optionClicked(w,i)}> {w} </button>)}
        </div>
    )
}

export default OptionList