import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import config from '../../../config';
import Write from '../Write';
import Button from '../Button';

import './index.css';

const item = ({match}) => {
    const { itemid } = match.params;

    const [item, setItem] = useState(null);
    const [deleteAction, setDeleteAction] = useState(false);

    useEffect(() => {
        axios.get(`${config.backendHost}/shoppinglist/item/${itemid}`)
            .then(({ data }) => {
                setItem(data);
            })
    }, []);

    const deleteItem = itemid => {
        axios.post(`${config.backendHost}/shoppinglist/delete`, { itemid });

        setDeleteAction(true);
    }

    const renderItem = item
        ? <div className="item">
                <h1 className="headline headline-container">
                    {item.title}
                    <div className="headline-container-buttons">
                        <Button variant="warning" clickFunction={() => deleteItem(item.id)}>Einkaufszettel wegwerfen</Button>
                    </div>
                </h1>
            <h2 className="headline headline--type-subheadline">Erstellt am { item.date }</h2>
            <Write 
                updateMode
                listTitle={item.title}
                listItems={item.items} />
        </div>
        : <div className="item">
            <h1 className="headline">Loading...</h1>
        </div>

    return (
        <React.Fragment>
            { deleteAction ? <Redirect to={'/'} /> : null }
            { renderItem }
        </React.Fragment>
    )
}

export default item;