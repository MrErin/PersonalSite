import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const startState = {
  currentBulb: 'off.png',
};

export const configureStore = (initialState = startState) => {
  return createStore(rootReducer, applyMiddleware(thunk));
};
