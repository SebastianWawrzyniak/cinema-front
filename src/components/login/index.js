import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
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

import { userSelectors } from '../../store/selectors'
import { UserActions } from '../../store/actions'

export const Login = () => {

    const [email, setEmail] = useState('') //mozna tez react.useState
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const user = useSelector(userSelectors.getUser)

    const login = () => {

        if (!validateEmail(email)) {
          NotificationManager.warning('Niepoprawny email')
          return
        } 
        if (password.length < 6) {
          NotificationManager.warning('Niepoprawne haslo')
          return
        }

        AuthService.login(email, password).then(res => {
          // redirect to Cinema and @TODO change localstorage with redux
          dispatch(UserActions.login(res.data))
         window.localStorage.token= res.data.token
          NotificationManager.success('Pomyslnie zalogowano');
        }).catch(e => {
          NotificationManager.error(e.message, 'Blad requestu');
        })
    }

console.log ('kaktus', user)

    if (user.token) return <Redirect to={'/'}/>

      const title = () => <div style={styles.div02}>
                   
        Zaloguj się !
       
        </div>

      return (
        

        // TODO zrobic przycisk, ktory po wcisnieciu przeniesie nas do ekranu rejestracji (np. <Link to="/register">About</Link>)
        
        <header style={styles.div01}>
           
        

            <Card style={styles.cardContainer}>
                <div style={styles.rejestracja}>
               {title()}
               <hr/>
               <Link style={{textDecoration: 'none'}} to="/register">Zarejestruj się ! </Link>
               </div>
                <Input value={email} style={{
                    marginBottom: 10
                }} onChange={(e) => setEmail(e.target.value)} placeholder='Login'/>
                 
               
                <Input value={password} onChange={(e) => setPassword( e.target.value)} placeholder='Password' type="password" />
                <Button style={{
                    marginTop:20,
                     
                }}  variant='contained' color='primary' onClick={() => login()}>Zaloguj sie</Button>
                
              
            </Card>  
            
        </header>
                
      )
    }
  
    
  