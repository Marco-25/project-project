import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Map3 from '../pages/Map3';
import Map2 from '../pages/Map2';
import Error from '../components/Error';
import Client from '../pages/Client';
import Driver from '../pages/Driver';
import Equipments from '../pages/Equipments';
import RegisterClient from '../pages/Client/RegisterClient';

const Routes: React.FC = () => {

    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/map" component={Map3} />
            <PrivateRoute path="/map2" component={Map2} />
            <PrivateRoute path="/clientes" component={Client} />
            <PrivateRoute path="/clientes_cadastro/:id" component={RegisterClient} />

            <PrivateRoute path="/motorista" component={Driver} />
            <PrivateRoute path="/equipamentos" component={Equipments} />

            <Route>
                <Error />
            </Route>
        </Switch>
    );
}

export default Routes;