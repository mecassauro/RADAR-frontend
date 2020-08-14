import React, {
  createContext,
  useContext,
  useCallback,
  useState,
  useEffect
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
  const [data, setData] = useState({});

  useEffect(()=>{
    const user = localStorage.getItem('@Radar:user');
    const token = localStorage.getItem('@Radar:token')

    if ( user && token){
      setData({user: JSON.parse(user), token})
    }
  },[])

  const signIn = useCallback(
    async ({ email, password }) => {

      const user = await auther.signInWithEmailAndPassword(email, password);
      const token = await auther.currentUser.getIdToken()

      localStorage.setItem('@Radar:token', token)
      localStorage.setItem('@Radar:user', JSON.stringify(user))
      setData({user, token})

    },
    [auther],
  );

  const forgotPassword = useCallback(
    async ({email}) => {
      console.log(email);
      await auther.sendPasswordResetEmail(email);
    },
    [auther],
  );

  const updateProfile = useCallback(
    async ({name, current_password, new_password}) => {
      await auther.currentUser.updateProfile(name)
      await auther.currentUser.updatePassword(new_password)
    },
    [auther],
  );

  const signOut = useCallback(async () => {
    await auther.signOut();

    localStorage.removeItem('@Radar:token')
    localStorage.removeItem('@Radar:user')

    setData({})
  }, [auther]);

  return (
    <FirebaseContext.Provider
      value={{
        signIn,
        forgotPassword,
        updateProfile,
        signOut,
        user: data.user,
        token: data.token,
        app
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
