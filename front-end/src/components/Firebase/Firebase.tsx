import React from 'react'
import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.APPID
}


app.initializeApp(firebaseConfig)
const auther = app.auth()
const provider = new firebase.auth.GoogleAuthProvider()

type FirebaseContextType = {
	app: any;
	signIn: any;
	signOut: any;
	reset: any;
	auther: any;
  };

const FirebaseContext = React.createContext<FirebaseContextType | undefined >(undefined)


export const FirebaseProvider = ({children}:any) => {
	const signInEmailPass = async (email:any, password:any) => {
		var k
		k = await auther.signInWithEmailAndPassword(email, password)
//		k = await auther.signInWithPopup(provider)
		console.log(k)
	}

	const resetPassword = (email:any) => {
		auther.sendPasswordResetEmail(email)

	}
	const signOut = () => auther.signOut()

	return(
		<FirebaseContext.Provider value={{app:app, signIn:signInEmailPass, signOut:signOut, reset:resetPassword, auther:auther}}>
			{children}
		</FirebaseContext.Provider>
	)
}



export const useFirebase = () => React.useContext(FirebaseContext)