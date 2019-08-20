import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import ShoppingList from '../ShoppingList';
import Button from '../Button';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                    <h1 className="headline headline-container">
                        Meine Einkaufszettel
                        <div className="headline-container-buttons">
                            <Button to="/write">
                                <Link to="/write">Einkaufszettel schreiben</Link>
                            </Button>
                        </div>
                    </h1>
                <ShoppingList />
            </div>
        )
    }
}