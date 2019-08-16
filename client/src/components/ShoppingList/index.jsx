import React, { useState } from 'react';

import './index.css';

import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            title: "Wocheneinkauf",
            date: "13.06.2019",
            cost: 16.33,
            done: false
        }
    ]);

    const renderShoppingListItems = items.map(item => (
        <ShoppingListItem
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            cost={item.cost}
            done={item.done} />
    ));

    return (
        <div className="shoppinglist">
            { renderShoppingListItems }
        </div>
    )
}

export default ShoppingList;