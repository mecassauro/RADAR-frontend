import React from 'react'
import firebase from 'firebase'
import app from 'firebase/app'
import 'firebase/auth'

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

const FirebaseContext = React.createContext({})



const FirebaseProvider = ({children}:any) => {
	const signInEmailPass = (email:any, password:any) => {
		auther.signInWithEmailAndPassword(email, password)
	}

	const signOut = () => auther.signOut()

	return(
		<FirebaseContext.Provider value={app}>
			{children}
		</FirebaseContext.Provider>
	)
}

export {FirebaseProvider, FirebaseContext}
