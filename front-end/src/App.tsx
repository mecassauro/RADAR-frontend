import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import FirebaseProvider from './components/Firebase'
import GlobalStyles  from './styles/GlobalStyles'

function App() {
  return (
    <FirebaseProvider>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
    </FirebaseProvider>
  );
}

export default App;
