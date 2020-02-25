import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './grads';

const rootReducer = combineReducers({ grads: reducer });

export default () => {
  return createStore(rootReducer, composeWithDevTools());
};
