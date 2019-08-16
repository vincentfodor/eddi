import React, { Component } from 'react';

import './index.css';

import ShoppingList from '../ShoppingList';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <ShoppingList />
            </div>
        )
    }
}