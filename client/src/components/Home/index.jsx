import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <Button to="/write" align="right">
                            <Link to="/write">Einkaufszettel schreiben</Link>
                        </Button>
                    </h1>
                <ShoppingList />
            </div>
        )
    }
}