import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
// Screen
import KanbanScreen from './KanbanScreen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <KanbanScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
