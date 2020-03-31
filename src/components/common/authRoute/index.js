import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../../store/selectors';

export const AuthRoute = ({ path, component }) => {

    // TODO change with redux
    const user = useSelector(userSelectors.getUser)

    if (user.token) {
        return (
            <Route to={path} component={component} />
        )
    } else {
        return <Redirect to={'/login'} />
    }
}