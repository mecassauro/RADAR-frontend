import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Routes';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Reset from '../pages/Reset';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/resetPassword" component={Reset} />
    </Switch>
  );
}

export default Routes;
