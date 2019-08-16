import React from 'react';
import { useStateValue } from '../../GlobalState/GlobalState';

import './index.css';

const NavigationIndicator = () => {
    const [state, dispatch] = useStateValue();

    const renderNavigationIndicatorItems = state.currentNavigationPath.map(label => (
        <li key={Math.random()} className="navigation-indicator-item">
            { label }
        </li>
    ))

    return (
        <ul className="navigation-indicator">
            { renderNavigationIndicatorItems }
        </ul>
    )
}

export default NavigationIndicator;