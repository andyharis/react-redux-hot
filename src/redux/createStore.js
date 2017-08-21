import React from 'react'
import {createStore, combineReducers} from 'redux'
import Reducers from './modules';

export default function configureStore() {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/index', () => {
      const reducers = require('./modules/index');
      const nextRootReducer = combineReducers(reducers.default);
      store.replaceReducer(nextRootReducer);
    });
  }

  const reducer = combineReducers(Reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const store = createStore(reducer);
  return store;
}