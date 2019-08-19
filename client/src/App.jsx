import React, { Component } from 'react';
import { 
  HashRouter, 
  Route, 
  Link,
  Switch
} from 'react-router-dom';
import { GlobalState } from './GlobalState/GlobalState';
import reducers from './GlobalState/reducers';

import Header from './components/Header';
import Home from './components/Home';
import Help from './components/Help';
import NavigationIndicator from './components/NavigationIndicator';
import Write from './components/Write';

import './App.css';

const initialState = {
  currentNavigationPath: [
    'Startseite',
    'Meine Einkaufszettel'
  ]
}

class App extends Component {
  render() {
    return (
      <HashRouter>
        <GlobalState initialState={initialState} reducers={reducers} >
          <div className="app">
            <Header />
            <NavigationIndicator />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/help" component={Help} />
              <Route path="/write" component={Write} />
            </Switch>
          </div>
        </GlobalState>
      </HashRouter>
    )
  }
}

export default App;