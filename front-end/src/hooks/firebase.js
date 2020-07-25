import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD9rjalcSyKkAALieIhV0Qeb2Uyo1eiG3c',
  authDomain: 'covinfo-cdf17.firebaseapp.com',
  databaseURL: 'https://covinfo-cdf17.firebaseio.com/',
  projectId: 'covinfo-cdf17',
  storageBucket: 'covinfo-cdf17.appspot.com',
  messagingSenderId: '619747978997',
  appId: '1:619747978997:web:cd8ff76ec2c6ada67c9fbc',
};

app.initializeApp(firebaseConfig);

const FirebaseContext = createContext();

export function FirebaseProvider({ children }) {
  const auther = app.auth();
  const [userData, setUserData] = useState({});
  const [haveUser, setHaveUser] = useState(async () => {
    const user = localStorage.getItem('@Radar:haveUser');
    return !!user;
  });

  useEffect(() => {
    const user = localStorage.getItem('@Radar:haveUser');
    if (user) {
      setHaveUser(true);
      setTimeout(() => {}, 500);
    }
  }, [haveUser]);

  const signIn = useCallback(
    async ({ email, password }) => {
      const user = await auther.signInWithEmailAndPassword(email, password);
      if (user) {
        setUserData(user);
        localStorage.setItem('@Radar:haveUser', JSON.stringify(true));
        setHaveUser(true);
      } else {
        throw new Error('Authenticate Error');
      }
    },
    [auther],
  );

  const getIdToken = useCallback(async () => {
    const token = await auther.currentUser.getIdToken();
    return token;
  }, [auther.currentUser]);

  const resetPassword = useCallback(
    async email => {
      await auther.sendPasswordResetEmail(email);
    },
    [auther],
  );

  const signOut = useCallback(async () => {
    setHaveUser(false);
    localStorage.removeItem('@Radar:haveUser');
    setUserData({});
    await auther.signOut();
  }, [auther]);

  return (
    <FirebaseContext.Provider
      value={{
        signIn,
        resetPassword,
        signOut,
        getIdToken,
        user: userData,
        haveUser,
        auther,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);

  if (!context) {
    throw new Error('useFirebase must be used within an FirebaseProvider');
  }

  return context;
}
