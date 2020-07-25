import React from 'react';
import { Route as RouteDOM, Redirect } from 'react-router-dom';

import { useFirebase } from '../hooks/firebase';

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { haveUser } = useFirebase();
  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!haveUser ? (
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
