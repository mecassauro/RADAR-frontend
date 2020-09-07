import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Routes';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Forgot from '../pages/Forgot';
import Profile from '../pages/Profile';
import UBS from '../pages/UBSdata';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/forgot" component={Forgot} />
<<<<<<< HEAD:front-end/src/routes/index.js
		  <Route path="/UBS" component={UBS} isPrivate />
=======
		<Route path="/UBS" component={UBS}/>
>>>>>>> master:src/routes/index.js
    </Switch>
  );
}

export default Routes;
