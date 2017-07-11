import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import JobReducer from '../reducers/jobReducer.js'
import userReducer from '../reducers/userReducer.js'


export let initStore = () => {

  const reducer = combineReducers( {
    jobs: JobReducer,
    user: userReducer
  });

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}
