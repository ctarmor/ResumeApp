import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { initialState } from './state.tsx';

import monitorReducersEnhancer from './Enhancers/monitorReducerEnhancer';
import rootReducer from './rootReducer';

//
// Configure Store with middlewares and reducers
// https://redux.js.org/recipes/configuring-your-store#extending-redux-functionality
//
export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, initialState, composedEnhancers);

  return store;
}