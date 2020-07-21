import React from 'react'
import { Switch, Route }from 'react-router-dom'

import SignInPage from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Dashboard from '../pages/Dashboard'
//import Forgot from '../pages/Forgot'

const Routes : React.FC = () =>{

  return(
    <Switch>
      <Route path='/' exact component={SignInPage} />
      <Route path='/signup'  component={SignUp} />
      <Route path='/dashboard'  component={Dashboard} />

    </Switch>
  )

}

export default Routes
