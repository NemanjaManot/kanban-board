import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
// theme
import { themeConfig } from './config';
// store
import { store, persistor } from './store';
// screen
import KanbanScreen from './KanbanScreen';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={themeConfig}>
          <KanbanScreen />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
