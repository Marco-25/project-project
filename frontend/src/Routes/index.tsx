import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Map3 from '../pages/Map3';
import Map2 from '../pages/Map2';
import Error from '../components/Error';
import Client from '../pages/Client';
import RegisterClient from '../pages/Client/RegisterClient';
import UpdateClient from '../pages/Client/UpdateClient';
import Vehicles from '../pages/Vehicles';
import Tracker from '../pages/Tracker';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/map" component={Map3} />
            <PrivateRoute path="/map2" component={Map2} />
            <PrivateRoute path="/clientes" component={Client} />
            <PrivateRoute path="/clientes_cadastro" component={RegisterClient} />
            <PrivateRoute path="/clientes_alterar/:id" component={UpdateClient} />

            <PrivateRoute path="/veiculos" component={Vehicles} />

            <PrivateRoute path="/veiculos" component={Tracker} />


            <Route>
                <Error />
            </Route>
        </Switch>
    );
}

export default Routes;