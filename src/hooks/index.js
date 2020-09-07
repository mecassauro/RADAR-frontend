import React from 'react';

import { FirebaseProvider } from './firebase';

function AppProvider({ children }) {
  return <FirebaseProvider>{children}</FirebaseProvider>;
}

export default AppProvider;
