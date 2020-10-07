import React from 'react';
import { Route as RouteDOM, Redirect } from 'react-router-dom';

import { useFirebase } from '../hooks/firebase';

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { user } = useFirebase();
  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        console.log(isPrivate);
        console.log(!!user);
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Route;
