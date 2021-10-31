import React from 'react';
import {
  RouteProps as ReactDOMRouterProps,
  Route as ReactDOMRoute,
  Redirect,
} from 'react-router-dom';
import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouterProps{
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ isPrivate = false, component: Componet, ...rest }) => {
  const userVerification = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        if (isPrivate) {
          if (isPrivate && !userVerification.user) {
            return <Redirect to={{ pathname: '/' }} />;
          }
        } if (!isPrivate && userVerification.user && !!userVerification.user.admin) {
          return <Redirect to={{ pathname: '/DashboardAdm' }} />;
        } if (!isPrivate && userVerification.user) {
          return <Redirect to={{ pathname: '/Dashboard' }} />;
        }

        return <Componet />;
      }}
    />
  );
};

export default Route;
