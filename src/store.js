import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
/* reducers */
import reducers from './reducers.js';

const persistConfig = {
  key: 'root',
  storage,
};

const appReducer = (state, action) => {
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const persistor = persistStore(store);
