import React, { Component } from 'react';

import './index.css';

import ShoppingList from '../ShoppingList';
import Button from '../Button';

export default class Home extends Component {
    myFunction = () => alert('test');

    render() {
        return (
            <div className="home">
                    <h1 className="headline inline-container">
                        Meine Einkaufszettel
                        <Button align="end" clickFunction={() => this.myFunction()}>Einkaufszettel schreiben</Button>
                    </h1>
                <ShoppingList />
            </div>
        )
    }
}