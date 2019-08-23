import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../GlobalState/GlobalState';
import Button from '../Button';
import config from '../../../config';
import Fingerprint from 'fingerprintjs2';

import './index.css';
import axios from 'axios';

const Write = ({
    updateMode,
    listTitle,
    listItems
}) => {
    const [state, dispatch] = useStateValue();
    const [fingerprint, setFingerprint] = useState(null);

    useEffect(() => {
        dispatch({
            type: 'SET_CURRENT_NAVIGATION_PATH',
            payload: {
                currentNavigationPath: [
                    'Meine Einkaufszettel',
                    'Einkaufszettel schreiben'
                ]
            }
        });

        Fingerprint.get(components => {
            const values = components.map(component => component.value);
            const digitalFingerprint = Fingerprint.x64hash128(values.join(' '), 31);

            setFingerprint(digitalFingerprint);
        });
    }, []);

    const [shoppingListTitle, changeShoppingListTitle] = useState(listTitle || null);
    const [shoppingList, changeShoppingList] = useState(listItems || []);

    const updateShoppingListTitle = e => changeShoppingListTitle(e.target.value);

    const updateShoppingList = e => {
        e.preventDefault();

        const { value } = e.target.product;

        if(value !== '') {
            changeShoppingList([
                ...shoppingList,
                {
                    id: shoppingList.length + 1,
                    name: value,
                    price: 5.99,
                    done: false
                }
            ]);

            e.target.product.value = null;
        }
    }

    const markShoppingListItemAsDone = itemid => {
        const updatedItem = shoppingList.filter(item => item.id === itemid)[0];
        const shoppingListWithUpdateExcluded = shoppingList.filter(item => item.id !== itemid);

        updatedItem.done = !updatedItem.done;

        changeShoppingList([
            ...shoppingListWithUpdateExcluded,
            updatedItem
        ]);
    }

    const submitShoppingList = () => {
        const list = {
            title: shoppingListTitle,
            fingerprint,
            items: shoppingList
        }

        axios.post(`${config.backendHost}/shoppinglist`, { list });
    }

    const renderShoppingList = shoppingList.sort((a, b) => a.id - b.id).reverse().map(item => (
        <div 
            className={item.done ? "shoppinglist-preview-item shoppinglist-preview-item--done-true" : "shoppinglist-preview-item"}
            key={item.id} 
            onClick={() => markShoppingListItemAsDone(item.id)}>
            <p className="shoppinglist-preview-item-name">{ item.name }</p>
            <p className="shoppinglist-preview-item-price">{ item.price }€</p>
        </div>
    ))

    return (
        <div className="write">
            {
                updateMode
                    ? null
                    : <h1 className="headline">Einkaufszettel schreiben</h1>
            }
            <div className="container">
                <div className="container container--size-half">
                    <form className="form" onSubmit={updateShoppingList}>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">Titel:</label>
                            <input className="form-input" type="text" name="title" id="title" onChange={updateShoppingListTitle} defaultValue={listTitle ? listTitle : null} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Was muss ich kaufen?</label>
                            <input className="form-input" type="text" name="product" />
                        </div>
                        <div className="form-group form-group--direction-row">
                            <Button as="button" type="submit">Artikel hinzufügen</Button>
                            <Button as="button" type="submit" clickFunction={submitShoppingList}>Einkaufszettel erstellen</Button>
                        </div>
                    </form>
                </div>
                <div className="container container--size-half container--direction-column">
                    <h2 className="headline headline--type-subheadline">{ shoppingListTitle }</h2>
                    <div className="shoppinglist-preview">
                        { renderShoppingList }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Write;