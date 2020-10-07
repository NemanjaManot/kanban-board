import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
// Screen
import KanbanScreen from './KanbanScreen';

const App = () => {
  return (
    <Provider store={store}>
      <KanbanScreen />
    </Provider>
  );
};

export default App;
