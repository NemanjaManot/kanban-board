import { createStore } from 'redux';
/* reducers */
import reducers from './reducers.js';

const appReducer = (state, action) => {
  return reducers(state, action);
};

const store = createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
