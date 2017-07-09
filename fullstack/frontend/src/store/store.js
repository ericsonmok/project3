import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import employerReducer from '../reducers/employerReducer.js'
import jobReducer from '../reducers/jobReducer.js'
import talentReducer from '../reducers/talentReducer.js'
import userReducer from '../reducers/userReducer.js'


export let initStore = () => {

  const reducer = combineReducers( {
    employer: employerReducer,
    job: jobReducer,
    talent: talentReducer,
    user: userReducer
  });

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}
