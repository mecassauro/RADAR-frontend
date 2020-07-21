import React from 'react'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Firebase, { FirebaseContext } from './components/Firebase'
import GlobalStyles  from './styles/GlobalStyles'

function App() {
  return (
    <FirebaseContext.Provider value={Firebase()}>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
    </FirebaseContext.Provider>
  );
}

export default App;
