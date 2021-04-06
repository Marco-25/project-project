import express from 'express';
import user from './userRoute'
import auth from './authenticationRoute'

export default (app: any) => {
    app.use(
        express.json(),
        auth,
        user,

    )
}

