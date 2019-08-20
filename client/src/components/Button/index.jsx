import React from 'react';

import './index.css';

const Button = ({children, clickFunction}) => {
    return (
        <button className='button' onClick={() => clickFunction()}>
            { children }
        </button>
    )
}

export default Button;