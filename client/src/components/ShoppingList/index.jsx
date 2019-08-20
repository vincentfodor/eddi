import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';

import './index.css';

import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
    const [items, setItems] = useState(null);
    
    useEffect(() => {
        axios.get(`${config.backendHost}/shoppinglist`)
            .then(({ data }) => {
                setItems(data.reverse());
            });
    }, []);

    const getTotalOfShoppingListItem = item => {
        let total = 0;

        item.items.map(product => {
            total += product.price
        });

        return total.toFixed(2);
    }

    const renderShoppingListItems = items
        ? items.map(item => (
            <ShoppingListItem
                key={item.id}
                id={item.id}
                title={item.title}
                date={item.date}
                cost={getTotalOfShoppingListItem(item)}
                done={item.done} />
        ))
        : <p>Einkaufslisten werden geladen...</p>

    return (
        <div className="shoppinglist">
            { renderShoppingListItems }
        </div>
    )
}

export default ShoppingList;