import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Map from '../pages/Map';
import Testt from '../pages/Testt';
import Error from '../components/Error';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/map" component={Map} />
            <PrivateRoute path="/test" component={Testt} />

            <Route>
                <Error />
            </Route>
        </Switch>
    );
}

export default Routes;