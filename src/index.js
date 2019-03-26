import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import reducers from './reducers/index';
import Layout from './containers/Layout';
import MainPage from './containers/MainPage';
import JogsPage from './containers/JogsPage';
import InfoPage from './components/InfoPage';
import ContactPage from './components/ContactPage';
import CreateJogPage from './containers/CreateJogPage';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route component={ Layout }>
                <Route path='/' component={ MainPage } />
                <Route path='/jogs'  component={ JogsPage } />
                <Route path='/info' component={ InfoPage } />
                <Route path='/contact' component={ ContactPage } />
                <Route path='/newJog' component={ CreateJogPage } />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)