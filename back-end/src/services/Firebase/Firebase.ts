import firebase from 'firebase'
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

firebase.initializeApp(firebaseConfig)

const FirebaseProvider = () => {
	return firebase
}

export default FirebaseProvider