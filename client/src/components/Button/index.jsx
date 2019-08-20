import React from 'react';

import './index.css';

const Button = ({
    children, 
    clickFunction,
    variant
}) => {
    const renderButtonClass = variant ? `button button--variant-${variant}` : 'button';

    return (
        <button className={renderButtonClass} onClick={() => clickFunction()}>
            { children }
        </button>
    )
}

export default Button;