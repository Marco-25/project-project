import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Map3 from '../pages/Map3';
import Map2 from '../pages/Map2';
import Error from '../components/Error';
import Vehicles from '../pages/Vehicles';
import Tracker from '../pages/Tracker';
import Driver from '../pages/Driver';
import RegidterDriver from '../pages/Driver/RegidterDriver';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/map" component={Map3} />
            <PrivateRoute path="/map2" component={Map2} />

            <PrivateRoute path="/motoristas" component={Driver} />
            <PrivateRoute path="/motoristas_cadastro" component={RegidterDriver} />
            <PrivateRoute path="/motoristas_alterar" component={RegidterDriver} />

            <PrivateRoute path="/veiculos" component={Vehicles} />

            <PrivateRoute path="/rastreadores" component={Tracker} />


            <Route>
                <Error />
            </Route>
        </Switch>
    );
}

export default Routes;