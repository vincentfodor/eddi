import React, { useState } from 'react';

import './index.css';

const ShoppingListItem = ({id, done, title, date, cost, finishShoppingList}) => {
    const renderShoppingListItemClass = done ? 'shoppinglist-item shoppinglist-item--state-done' : 'shoppinglist-item'

    return (
        <div className={renderShoppingListItemClass}>
            <div className="shoppinglist-item-top"></div>
            <div className="head">
                <div className="head-indicator"></div>
                <button className="head-finish-button" onClick={() => finishShoppingList(id)}>✓</button>
            </div>
            <div className="content">
                <h2 className="label">{ title }</h2>
                <p className="date">{ date }</p>
            </div>
            <div className="cost">
                <p className="cost-label">Kosten:</p>
                <p className="cost-value">{ cost }€</p>
            </div>
        </div>
    )
}

export default ShoppingListItem;