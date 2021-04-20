import express from 'express';
import user from './userRoute';
import auth from './authenticationRoute';
import driver from './driverRoute ';
import vehicle from './vehicleRouter';
import tracker from './trackerRoute';
import historic from './historicRouter';
import types from './typeRoute';

export default (app: any) => {
    app.use(
        express.json(),
        auth,
        user,
        driver,
        vehicle,
        tracker,
        historic,
        types
    )
}

