import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const AuthRoute = ({ path, component }) => {

    // TODO change with redux
    const isLoggedIn = useSelector((state) => state.userReducer.profile)

    if (isLoggedIn) {
        return (
            <Route to={path} component={component} />
        )
    } else {
        return <Redirect to={'/login'} />
    }
}