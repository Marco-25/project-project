import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Map3 from '../pages/Map3';
import Map2 from '../pages/Map2';
import Testt from '../pages/Testt';
import Error from '../components/Error';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/map" component={Map3} />
            <PrivateRoute path="/map2" component={Map2} />
            <PrivateRoute path="/test" component={Testt} />

            <Route>
                <Error />
            </Route>
        </Switch>
    );
}

export default Routes;