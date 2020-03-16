import React from 'react';

import { Button, Card, Input } from '@material-ui/core'
import styles from './style.js';
import AuthService from '../../services/auth'
import { NotificationManager } from 'react-notifications'

import { validateEmail } from '../../helpers'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


export default class Login extends React.Component {

    constructor(props) {
      super(props)
  
      this.state = {
        login: '',
        password: '',
        loggedIn: false
      }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }
  
    login() {

        const { email, password } = this.state

        if (!validateEmail(email)) {
          NotificationManager.warning('Niepoprawny email')
          return
        } 
        if (password.length < 6) {
          NotificationManager.warning('Niepoprawne haslo')
          return
        }

        AuthService.login(email, password).then(res => {
          // redirect to Cinema
          window.localStorage.token = res.token
          window.localStorage.user = email
          this.setState({
            loggedIn: true
          })
          NotificationManager.success('Pomyslnie zalogowano');
        }).catch(e => {
          NotificationManager.error(e.message, 'Blad requestu');
        })
    }

    
    
    render() {

    if (this.state.loggedIn) return <Redirect to={'/'}/>

      const title = () => <div style={styles.div02}>
                   
        Zaloguj się !
       
        </div>

      return (
        

        // TODO zrobic przycisk, ktory po wcisnieciu przeniesie nas do ekranu rejestracji (np. <Link to="/register">About</Link>)
        
        <header style={styles.div01}>
           
        

            <Card style={styles.cardContainer}>
                
               {title()}
               <hr/>
               <Link to="/register">Zarejestruj się ! </Link>
                 
                <Input value={this.state.email} style={{
                    marginBottom: 10
                }} onChange={(e) => this.setState({ email: e.target.value })} placeholder='Login'/>
                 
               
                <Input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder='Password' type="password" />
                <Button style={{
                    marginTop:20,
                     
                }}  variant='contained' color='primary' onClick={() => this.login()}>Zaloguj sie</Button>
                
              
            </Card>  
            
        </header>
                
      )
    }
  }
    
  