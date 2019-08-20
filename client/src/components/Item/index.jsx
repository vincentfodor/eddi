import React from 'react';

import './index.css';

const item = ({match}) => {
    const { itemid } = match.params;
    
    return (
        <div className="item">
            <h1 className="headline">Item { itemid }</h1>
        </div>
    )
}

export default item;