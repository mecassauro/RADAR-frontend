import React from 'react'

const dum = () => {

}

const FirebaseContext = React.createContext(dum())

export const withFirebase = (Component:any) => (props:any) => (
    <FirebaseContext.Consumer>
		{firebase => <Component {...props} firebase={firebase} />}
	</FirebaseContext.Consumer>
)

export default FirebaseContext
