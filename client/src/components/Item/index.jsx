import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';
import Write from '../Write';
import Button from '../Button';

import './index.css';

const item = ({match}) => {
    const { itemid } = match.params;

    const [item, setItem] = useState(null);

    useEffect(() => {
        axios.get(`${config.backendHost}/shoppinglist/item/${itemid}`)
            .then(({ data }) => {
                setItem(data);
            })
    }, []);

    const renderItem = item
        ? <div className="item">
                <h1 className="headline headline-container">
                    {item.title}
                    <div className="headline-container-buttons">
                        <Button variant="warning">Einkaufszettel wegwerfen</Button>
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
            { renderItem }
        </React.Fragment>
    )
}

export default item;