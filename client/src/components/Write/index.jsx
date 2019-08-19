import React, { useEffect, useState } from 'react';
import { useStateValue } from '../../GlobalState/GlobalState';
import Button from '../Button';

import './index.css';

const Write = () => {
    const [state, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: 'SET_CURRENT_NAVIGATION_PATH',
            payload: {
                currentNavigationPath: [
                    'Meine Einkaufszettel',
                    'Einkaufszettel schreiben'
                ]
            }
        })
    }, []);

    const [shoppingListTitle, changeShoppingListTitle] = useState(null);
    const [shoppingList, changeShoppingList] = useState([]);

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
                    price: 5.99
                }
            ]);

            e.target.product.value = null;
        }
    }

    const renderShoppingList = shoppingList.map(item => (
        <div className="shoppinglist-preview-item" key={item.id}>
            <p className="shoppinglist-preview-item-name">{ item.name }</p>
            <p className="shoppinglist-preview-item-price">{ item.price }€</p>
        </div>
    ))

    return (
        <div className="write">
            <h1 className="headline">Einkaufszettel schreiben</h1>
            <div className="container">
                <div className="container container--size-half">
                    <form className="form" onSubmit={updateShoppingList}>
                        <div className="form-group">
                            <label htmlFor="title" className="form-label">Titel:</label>
                            <input className="form-input" type="text" name="title" id="title" onChange={updateShoppingListTitle} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="" className="form-label">Was muss ich kaufen?</label>
                            <input className="form-input" type="text" name="product" />
                        </div>
                        <div className="form-group">
                            <Button as="button" type="submit" align="left">Artikel hinzufügen</Button>
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