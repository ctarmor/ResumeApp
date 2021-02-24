import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunkMiddleware from 'redux-thunk';

// https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware
// https://redux.js.org/tutorials/fundamentals/part-6-async-logic#redux-async-data-flow

// Setup middlewares
const middlewares = applyMiddleware(thunkMiddleware);

// Creat app store
const store = createStore(rootReducer, middlewares);

export default store; 