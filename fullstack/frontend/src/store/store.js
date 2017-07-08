import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import JobReducer from '../reducers/jobReducer.js'
import TalentReducer from '../reducers/talentReducer.js'
import EmployerReducer from '../reducers/employerReducer.js'
import UserReducer from '../reducers/userReducer.js'


export let initStore = () => {

  const reducer = combineReducers( {
    jobs: JobReducer,
    talents: TalentReducer,
    employers: EmployerReducer,
    user: UserReducer
  });

  const store = createStore(reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  return store;
}
