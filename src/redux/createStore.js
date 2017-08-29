import React from 'react'
import {createStore, combineReducers, applyMiddleware} from 'redux';
import middleware from './middleware';
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

  const reducer = combineReducers(Reducers);
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(middleware),
  );
  return store;
}