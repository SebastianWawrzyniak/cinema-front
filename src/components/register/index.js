import React from 'react'
import { Button, Card, Input } from '@material-ui/core'
import styles from './style.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AuthService from '../../services/auth'
import { NotificationManager } from 'react-notifications'

import { validateEmail } from '../../helpers'

const Rejestracja = () => <h1>Zarejestruj się !</h1>;

export default class Register extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      login: '',
      password: '',
      repeatPassword: ''
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  register() {


    const { email, password, repeatPassword } = this.state

    if (!validateEmail(email)) {
      NotificationManager.warning('Niepoprawny email')
      return
    }
    if (password.length < 6) {
      NotificationManager.warning('Niepoprawne haslo')
      return
    }
    if (password !== repeatPassword) {
      NotificationManager.warning('Podaj takie same hasla')
      return
    }

    AuthService.register(email, password, repeatPassword).then(res => {
      NotificationManager.success('Pomyslnie zarejestrowano');
    }).catch(e => {
      NotificationManager.error(e.message, 'Blad requestu');
    })
  }
  render() {
    return (
      <div style={styles.div01}>



        <Card style={styles.cardContainer}>
          <div style={styles.div02}>

            {Rejestracja()}
            <hr />
            <Link to="/login">ZALOGUJ</Link>
          </div>
          <Input value={this.state.email} style={{
            marginBottom: 10
          }} onChange={(e) => this.setState({ email: e.target.value })} placeholder='Login' />
          <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder='Password' type="password" />
          <Input value={this.state.repeatPassword} onChange={(e) => this.setState({ repeatPassword: e.target.value })} placeholder='repeatPassword' type="password" />
          <Button style={{
            marginTop: 20,


          }} variant='contained' color='primary' onClick={() => this.register()}>Zarejestruj się !  </Button>



        </Card>

      </div>
    )
  }
}