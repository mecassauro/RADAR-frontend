import React from 'react'
import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD9rjalcSyKkAALieIhV0Qeb2Uyo1eiG3c",
	authDomain: "covinfo-cdf17.firebaseapp.com",
	databaseURL: "https://covinfo-cdf17.firebaseio.com/",
	projectId: "covinfo-cdf17",
	storageBucket: "covinfo-cdf17.appspot.com",
	messagingSenderId: "619747978997",
	appId: "1:619747978997:web:cd8ff76ec2c6ada67c9fbc"
}


app.initializeApp(firebaseConfig)
const auther = app.auth()

type FirebaseContextType = {
	app: any;
	signIn: any;
	signOut: any;
	reset: any;
	auther: any;
  };

const FirebaseContext = React.createContext<FirebaseContextType | undefined >(undefined)


export const FirebaseProvider = ({children}:any) => {
	const signInEmailPass = (email:any, password:any) => {
		console.log("ASASA")
		auther.signInWithEmailAndPassword(email, password)
	}

	const resetPassword = (email:any) => {
		console.log("AAAAAAAA")
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