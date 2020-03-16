import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { useHistory } from 'react-router-dom'

import { LOGOUT } from '../../store/actions'

export const Header = (props) => {

    const history = useHistory()

    const dispatch = useDispatch()
    
    const profile = useSelector((state) => state.userReducer.profile)

    const logout = () => {
        dispatch({ type: LOGOUT })
        history.push('/login')
    }

    if (!profile) return null

    return (
        <AppBar>
            <Toolbar>
                <span>{profile.email}</span>
                <Button onClick={()=> logout() } variant={"contained"}>Wyloguj się</Button>
            </Toolbar>
        </AppBar>
    )
}



// funkcje w js

// function method() {
//     return 'asd'   
// }
// function method(param1, param2) {
//     return 'asd' + param1 / param2
// }


// method()
// method(0,2)