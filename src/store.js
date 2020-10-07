import { createStore } from 'redux';
/* reducers */
import reducers from './reducers.js';

const appReducer = (state, action) => {
  return reducers(state, action);
};

const store = createStore(appReducer, {});

export default store;
