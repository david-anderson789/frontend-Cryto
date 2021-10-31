import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import DashboardAdm from '../pages/DashboardAdm';
import Portfolio from '../pages/Dashboard/Portfolio';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signUp" component={SignUp} />
    <Route path="/Dashboard" component={Dashboard} isPrivate />
    <Route path="/DashboardAdm" component={DashboardAdm} isPrivate />
    <Route path="/Portfolio" component={Portfolio} isPrivate />
  </Switch>
);

export default Routes;
