import React from 'react';
import { Route, Redirect } from 'react-router-dom'

export const AuthRoute = ({ path, component }) => {

    const isLoggedIn = window.localStorage.user && window.localStorage.token

    if (isLoggedIn) {
        return (
            <Route to={path} component={component} />
        )
    } else {
        return <Redirect to={'/login'} />
    }
}