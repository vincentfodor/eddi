import React from 'react';

import './index.css';

const Button = ({children, align, clickFunction}) => {
    let renderButtonClass = align ? `button button--align-${align}` : 'button';

    return (
        <button className={renderButtonClass} onClick={() => clickFunction()}>
            { children }
        </button>
    )
}

export default Button;