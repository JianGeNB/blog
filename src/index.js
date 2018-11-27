/* jshint esversion: 6 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import Main from './components/main/main';
import {createStore,applyMiddleware,compose} from 'redux';
import {Provider}from 'react-redux';
import reducers from './redux/reducers.jsx';
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers,compose(applyMiddleware(thunk),window.devToolsExtension?window.devToolsExtension():()=>{}));
ReactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>
, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
