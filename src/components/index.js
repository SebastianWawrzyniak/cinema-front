import React, { useEffect, useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { Provider } from 'react-redux'
import {Login} from './login'
import Register from './register'
import { Cinema } from './cinema'

import { NotificationContainer, NotificationManager } from 'react-notifications';
import AuthService from '../services/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Header } from './header';
import { AuthRoute } from './common/authRoute'
import { Loading } from './common/loading'

import store from '../store'
import { UserActions } from '../store/actions';

function App() {

  const [loading, setLoading] = useState(true)

  const token =window.localStorage.token// store.getState().userReducer.token

  useEffect(() => {
    AuthService.status(token).then((result) => {
      store.dispatch(UserActions.login(result.user))
    }).catch(e => {
      //NotificationManager.warn(e.message)
    }).finally(() => {
      setLoading(false)
    })
  }, []) // odpala sie tylko raz

  if (loading) return <Loading/>

  return (
    <div style={{ height: '100%' }}>
      <Provider store={store}>
      <Router>
        {!token && <Redirect to={'/login'} />}
        <Header/>
        <Switch>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <AuthRoute path='/' component={Cinema} />
          </Switch> 

        <NotificationContainer />
      </Router>
      </Provider>
    </div>

  );
}

export default App;


