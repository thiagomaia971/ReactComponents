import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import rootReducers from "./src/reducers/index";
import rootSagas from "./src/sagas/index";

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    combineReducers({
        rootReducers,
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));