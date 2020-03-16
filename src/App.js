import React, { useEffect, useState } from 'react';
import 'react-notifications/lib/notifications.css';

import Login from './components/login'
import Register from './components/register'
import { Cinema } from './components/cinema'

import { NotificationContainer, NotificationManager } from 'react-notifications';
import AuthService from './services/auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Header } from './components/header';
import { AuthRoute } from './components/common/authRoute'

function App() {

  const [loading, setLoading] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    AuthService.status(window.localStorage.token).then((result) => {
      window.localStorage.user = result.user.email
      setLoggedIn(true)
    }).catch(e => {
      // NotificationManager.warn(e.message)
    }).finally(() => {
      setLoading(false)
    })

    console.log('useEffect', window.localStorage.token)
  }, []) // odpala sie tylko raz

  if (loading) return <div style={{
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}><span>Loading...</span></div>

  return (
    <div style={{ height: '100%' }}>
      <Router>
        {!loggedIn && <Redirect to={'/login'} />}
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
    </div>

  );
}

export default App;


