import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/configureStore'
import './index.css';
import Router from './component/Router';
import 'bootstrap/dist/css/bootstrap.css';


render(
    <Provider store = {store}>
        <div>
            <Router></Router>
        </div>
    </Provider>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

