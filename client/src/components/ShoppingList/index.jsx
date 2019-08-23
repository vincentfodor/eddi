import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import Fingerprint from 'fingerprintjs2';

import './index.css';

import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
    const [items, setItems] = useState(null);
    
    useEffect(() => {
        Fingerprint.get(components => {
            const values = components.map(component => component.value);
            const fingerprint = Fingerprint.x64hash128(values.join(' '), 31);

            axios.get(`${config.backendHost}/shoppinglist?fingerprint=${fingerprint}`)
            .then(({ data }) => {
                setItems(data.reverse());
            });
        });
    }, []);

    const getTotalOfShoppingListItem = item => {
        let total = 0;

        item.items.map(product => {
            total += product.price
        });

        return total.toFixed(2);
    }

    const renderShoppingListItems = () => {
        if(items === [] && items) {
            return <h2 className="headline headline--type-subheadline">Keine Einkaufslisten geschrieben</h2>
        } else if(!items) {
            return <h2 className="headline headline--type-subheadline">Einkaufslisten werden geladen...</h2>
        } else {
            return items.map(item => (
                <div className="shoppinglist">
                    <ShoppingListItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        date={item.date}
                        cost={getTotalOfShoppingListItem(item)}
                        done={item.done} />
                </div>
            ))
        }
    }

    return renderShoppingListItems();
}

export default ShoppingList;