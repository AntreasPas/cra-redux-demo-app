import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './grads';

const rootReducer = combineReducers({ grads: reducer });

export default () => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
};
