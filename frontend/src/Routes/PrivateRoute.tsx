import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../context/AuthContext';

interface RoutesPropsData extends RouteProps { }

const PrivateRoute: React.FC<RoutesPropsData> = ({ ...props }) => {
    const { userLogged } = useAuth();

    if (!userLogged()) return <Redirect to="/" />

    if (!userLogged()) return <Redirect to="/" />

    return (
        userLogged() ? (<Route {...props} />) : <Redirect to="/" />
    );
}

export default PrivateRoute;