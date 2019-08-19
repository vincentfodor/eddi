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
        },
        {
            id: 2,
            title: "Hochzeit",
            date: "11.06.2019",
            cost: 100.41,
            done: false
        },
        {
            id: 3,
            title: "Geburtstag",
            date: "11.06.2019",
            cost: 100.41,
            done: false
        },
        {
            id: 4,
            title: "Geburtstag",
            date: "11.06.2019",
            cost: 100.41,
            done: false
        },
        {
            id: 5,
            title: "Geburtstag",
            date: "11.06.2019",
            cost: 100.41,
            done: false
        },
    ]);

    const finishShoppingList = target => {
        const targetIndex = items.findIndex(item => item.id === target);
        let newItems = [...items];
        newItems[targetIndex].done = true;
        setItems(newItems);
    }

    const renderShoppingListItems = items.map(item => (
        <ShoppingListItem
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            cost={item.cost}
            done={item.done}
            finishShoppingList={finishShoppingList} />
    ));

    return (
        <div className="shoppinglist">
            { renderShoppingListItems }
        </div>
    )
}

export default ShoppingList;