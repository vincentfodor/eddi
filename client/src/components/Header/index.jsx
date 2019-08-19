import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../GlobalState/GlobalState';

import './index.css';

const Header = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const [{}, dispatch] = useStateValue();

    return (
        <div className="header">
            <img className="header-logo" src="./media/images/logo/original-500x173--edit.png" />
            <ul className="nav">
                <li className="nav-item">
                    <Link  
                        to="/"
                        className={(currentTab === 0) ? 'nav-item-link nav-item-link--state-active' : 'nav-item-link'}
                        onClick={() => {
                            setCurrentTab(0);
                            dispatch({
                                type: 'SET_CURRENT_NAVIGATION_PATH',
                                payload: {
                                    currentNavigationPath: [
                                        'Startseite',
                                        'Meine Einkaufszettel'
                                    ]
                                }
                            });
                        }}
                    >
                            Meine Einkaufszettel
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        to="help"
                        className={(currentTab === 1) ? 'nav-item-link nav-item-link--state-active' : 'nav-item-link'}
                        onClick={() => {
                            setCurrentTab(1);
                            dispatch({
                                type: 'SET_CURRENT_NAVIGATION_PATH',
                                payload: {
                                    currentNavigationPath: [
                                        'Wie funktioniert das System?'
                                    ]
                                }
                            })
                        }}
                    >
                            Wie funktioniert das System?
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;