import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import GoblaStyles from './styles/global';

import AppProvider from './hooks';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GoblaStyles />
    </BrowserRouter>
  );
}

export default App;
