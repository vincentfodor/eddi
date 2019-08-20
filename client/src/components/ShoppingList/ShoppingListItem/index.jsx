import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../GlobalState/GlobalState';

import './index.css';

const ShoppingListItem = ({id, done, title, date, cost, finishShoppingList}) => {
    const renderShoppingListItemClass = done ? 'shoppinglist-item shoppinglist-item--state-done' : 'shoppinglist-item'
    const [{}, dispatch] = useStateValue();

    return (
        <Link 
            className="shoppinglist-item-link" 
            to={`/item/${id}`}
            onClick={() => dispatch({
                type: 'SET_CURRENT_NAVIGATION_PATH',
                payload: {
                    currentNavigationPath: [
                        'Meine Einkaufszettel',
                        title
                    ]
                }
            })}>
            <div className={renderShoppingListItemClass}>
                <div className="shoppinglist-item-top"></div>
                <div className="head">
                    <div className="head-indicator"></div>
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
        </Link>
    )
}

export default ShoppingListItem;